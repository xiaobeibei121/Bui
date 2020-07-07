const { lstatSync, readdirSync, writeFileSync } = require('fs');
const { join, resolve } = require('path');
const uppercamelcase = require('uppercamelcase');

const isDirectory = source => lstatSync(source).isDirectory();
const getDirectories = source => readdirSync(source).filter(name => {
    return isDirectory(join(source, name));
});

let packages = getDirectories(resolve(__dirname, '../packages'));
let packagesImport = packages.map(name => `import ${uppercamelcase(name)} from './${name}';`);

let content = `// 此文件由 build/build-entry.js 自动生成，勿手动更改
${packagesImport.join('\n')}

const components = [
    ${packages.map(name => uppercamelcase(name)).join(',\n    ')}
];

const install = Vue => {
    if (install.installed) return;
    install.installed = true;
    components.map(component => {
        component.install(Vue);
    });
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    ${packages.map(name => uppercamelcase(name)).join(',\n    ')}
};
`;

writeFileSync(join(__dirname, '../packages/index.js'), content);
