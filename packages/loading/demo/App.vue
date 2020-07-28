<template>
    <div class="demo-loading">
        <div class="demo-section">
            <p class="demo-title">加载类型 circle</p>
            <div class="demo-area">
                <b-loading type="circle" color="#cccccc" :size="25"></b-loading>
            </div>
        </div>

        <div class="demo-section">
            <p class="demo-title">加载类型 snake</p>
            <div class="demo-area">
                <b-loading type="snake" color="#cccccc" :size="20"></b-loading>
            </div>
        </div>

        <div class="demo-section">
            <p class="demo-title">加载类型 triple-bounce</p>
            <div class="demo-area">
                <b-loading type="triple-bounce" color="#cccccc" :size="8"></b-loading>
            </div>
        </div>
    </div>
</template>

<script>    
    import 'src/style/base';
    import Vue from 'vue';
    import BLoading from '../index';
    Vue.use(BLoading);
    export default {
        name: 'demo-loading',
        components: {
            BLoading
        }
    };
</script>

<style lang="scss" scoped>
    .demo-loading {
        .demo-section {
            background: #f5f5f5;
            padding: 0 15px;
        }

        .demo-title {
            font-size: 14px;
            color: #999;
            padding-top: 10px;
            line-height: 40px;
        }

        .demo-area {
            text-align: center;
        }
    }
</style>
