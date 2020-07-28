<template>
    <transition name="b-fade">
        <div class="b-cover"
             b-if="currentValue"
             @click.stop.self="closeCover"
             :class="className"
             :style="durationTime">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
    import Transform from 'src/utils/transform';
    import { on, off } from 'src/utils/dom';
    import Touch from 'src/mixins/touch';
    import 'src/style/base';

    export default {
        name: 'b-cover',

        mixins: [ Touch ],

        props: {
            value: Boolean,
            closeOnClickCover: {
                type: Boolean,
                default: true
            },
            className: String,
            duration: {
                type: Number,
                default: 300
            },
            lockScroll: {
                type: Boolean,
                default: true
            },
            zIndex: {
                type: Number | String,
                default: 9999
            }
        },

        watch: {
            currentValue () {
                if (this.lockScroll) {
                    if (this.currentValue) {
                        document.body.classList.add('b-overflow-hidden');
                        on(document, 'touchstart', this.touchStart);
                        on(document, 'touchmove', this.touchMove);
                    } else {
                        document.body.classList.remove('b-overflow-hidden');
                        off(document, 'touchstart', this.touchStart);
                        off(document, 'touchmove', this.touchMove);
                    }
                }
            }
        },

        computed: {
            durationTime () {
                let style = {};
                style[`${Transform.transitionStyleName}-duration`] = `${this.duration}ms`;
                style.zIndex = this.zIndex;

                return style;
            },

            currentValue: {
                get () {
                    return this.value;
                }
            }
        },

        methods: {
            closeCover () {
                if (!this.closeOnClickCover) return false;

                this.$emit('input', false);
            }
        }
    };
</script>

<style lang="scss">
    .b-overflow-hidden {
        overflow: hidden;
    }

    .b-cover {
        position: fixed;
        width: 100%;
        max-width: 750px;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        background: rgba(0, 0, 0, .7);
    }

    .b-fade-enter-active,
    .b-fade-leave-active {
        transition: opacity .3s;
    }
    .b-fade-enter,
    .b-fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
