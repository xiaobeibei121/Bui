<template>
    <div class="list">
        <div v-for="(data, key) in Components" :key="key">
            <p>{{key}}</p>
            <li v-for="item in data" :key="item.path">
                <router-link :to="`/components/${item.path}`">{{item.name}}</router-link>
            </li>
        </div>
    </div>
</template>

<script>
    import Components from 'data/componentData';

    export default {
        name: 'demo-index',
        data () {
            return {
                Components
            };
        }
    };
</script>

<style lang="scss">
    .list {
        background: #fff;
        padding: 16px;
        line-height: 20px;
    }
</style>
