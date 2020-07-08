<template>
    <div class="container">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'demo-mobile',
        beforeCreate () {
            (function (w) {
                var d = document.documentElement;
                var fun = function () {
                    var wid = d.clientWidth > 750 ? 750 : d.clientWidth;
                    d.style.fontSize = wid / 750 * 100 + 'px';
                };
                w.addEventListener('resize', fun);
                fun();
            })(window);
        }
    };
</script>

<style lang="scss">
    html,
    body {
        height: 100%;
        background: #f5f5f5;
    }
    body {
        font-size: 14px;
    }

    .container {
        width: 100%;
        max-width: 750px;
        margin: 0 auto;
        height: 100%;
        overflow-y: auto;
    }

    ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
        background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 6px;
        background-color: rgba(69, 90, 100, .2);
    }

    .demo-section {
        margin: 10px 0;
        background: #fff;

        p.title {
            padding: 0 16px;
            line-height: 44px;
            font-size: 14px;
            color: #666;
            background: #f5f5f5;
        }

        p.des {
            padding: 0 16px;
            line-height: 44px;
        }
    }
</style>
