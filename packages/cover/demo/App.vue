<template>
    <div class="demo-cover">
        <div class="demo-section" @click="toggleCover1">
            <p class="des">显示遮罩</p>
            <b-cover v-model="showCover1"></b-cover>
        </div>

        <div class="demo-section" @click="toggleCover2">
            <p class="des">嵌套显示 自定义slot/其他组件 的遮罩</p>
            <b-cover v-model="showCover2">
                <div class="box">自定义内容</div>
            </b-cover>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import BCover from '../index';
    Vue.use(BCover);
    export default {
        name: 'demo-cover',
        components: {
            BCover
        },
        data () {
            return {
                showCover1: false,
                showCover2: false
            }
        }, 
        methods: {
            toggleCover1 () {
                this.showCover1 = !this.showCover1;
            },

            toggleCover2 () {
                this.showCover2 = !this.showCover2;
            }
        }
    };
</script>

<style lang="scss">
    .demo-cover {
        max-width: 750px;
        margin: 0 auto;

        .box {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 200px;
            height: 200px;
            margin-left: -100px;
            margin-top: -100px;
            background: #fff;
        }

        .picker {
            position: fixed;
            bottom: 0;
            z-index: 105;
        }
    }

    .b-slide-enter-active,
    .b-slide-leave-active {
        transition: all .3s ease;
    }

    .b-slide-enter,
    .b-slide-leave-to {
        transform: translateY(100%);
    }
</style>
