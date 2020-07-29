<template>
    <transition name="b-fade">
        <div class="b-cover"
             v-if="value"
             @click.stop.self="closeCover"
             :class="className"
             :style="styleObj">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'b-cover',
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
            zIndex: {
                type: Number | String,
                default: 9999
            }
        },

        computed: {
            styleObj () {
                let style = {};
                style.zIndex = this.zIndex;
                return style;
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
