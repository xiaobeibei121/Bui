<template>
    <div class="demo-toast">
        <div class="demo-section">
            <p class="demo-title">文字提示</p>
            <div class="demo-area">
                <b-button class="demo-button" :height="40" @click="handleToast('middle', '屏幕中部toast')">中部文字提示</b-button>
                <b-button class="demo-button" :height="40" @click="handleToast('middle', '中部长文字提示中部长文字提示中部长文字提示中部长文字提示')">中部长文字提示</b-button>
                <b-button class="demo-button" :height="40" @click="handleToast('bottom', '屏幕底部toast')">底部文字提示</b-button>
                <b-button class="demo-button" :height="40" @click="handleToast('bottom', '底部长文字提示底部长文字提示底部长文字提示底部长文字提示')">底部长文字提示</b-button>
            </div>
        </div>

        <div class="demo-section">
            <p class="demo-title">加载提示</p>
            <div class="demo-area">
                <b-button class="demo-button" :height="40" @click="handleToast('middle', '', 'loading')">加载提示</b-button>
                <b-button class="demo-button" :height="40" @click="handleToast('middle', '', 'loading', 'snake')">自定义加载图标</b-button>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Toast from '../index';
    import BButton from 'packages/button';
    Vue.use(BButton);
    export default {
        name: 'demo-toast',
        components: {
            BButton
        },
        data () {
            return {
                showCover1: false,
                showCover2: false
            }
        }, 
        methods: {
            handleToast (position, msg, type, loading) {
                const options = {
                    type: type,
                    position: position,
                    message: msg,
                    loadingType: loading
                };
                Toast(options);
            }
        }
    };
</script>

<style lang="scss" scoped>
    .demo-toast {
        height: 100%;
        background: #fff;

        .demo-section {
            padding: 0 15px;
            margin: 0;
        }

        .demo-title {
            line-height: 40px;
            color: #999;
        }

        .demo-button {
            margin: 0 15px 15px 0;
        }
    }
</style>
