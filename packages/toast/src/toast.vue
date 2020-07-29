<template>
    <transition name="fade">
        <div class="b-toast" v-if="visible" :class="className">
            <div class="b-toast-text" :class="customClass" v-if="type === 'text'">{{message}}</div>
            <div
                class="b-toast-text b-toast-loading"
                v-else-if="type === 'loading'">
                <b-loading :type="loadingType" :size="30" color="#fff"></b-loading>
            </div>
        </div>
    </transition>
</template>

<script>
    import Vue from 'vue';
    import Loading from 'packages/loading';
    Vue.use(Loading);

    export default {
        name: 'b-toast',
        data () {
            return {
                visible: false
            };
        },
        props: {
            type: String,
            message: String,
            position: String,
            className: String,
            loadingType: String
        },
        computed: {
            customClass () {
                let classes = '';
                switch (this.position) {
                case 'bottom':
                    classes = 'b-bottom';
                    break;
                default:
                    classes = 'b-middle';
                }

                return classes;
            }
        }
    };
</script>

<style lang="scss">
    .b-toast {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        user-select: none;
        text-align: center;
        font-size: 0;
        z-index: 9999;

        &::before {
            content: "";
            display: inline-block;
            vertical-align: middle;
            width: 0;
            height: 100%;
        }

        .b-toast-text {
            display: inline-block;
            box-sizing: border-box;
            min-width: 120px;
            max-width: 78.67%;
            background: rgba(0, 0, 0, .7);
            border-radius: 6px;
            padding: 15px 20px;
            color: #fff;
            font-size: 14px;
            line-height: 22px;

            &.b-toast-loading {
                position: relative;
                width: 100px;
                height: 80px;
                padding: 0;

                .b-loading {
                    position: absolute;
                    width: 30px;
                    height: 30px;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    margin: auto;
                }
            }
        }

        .b-middle {
            vertical-align: middle;
        }

        .b-bottom {
            vertical-align: bottom;
            margin-bottom: 20px;
        }
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
