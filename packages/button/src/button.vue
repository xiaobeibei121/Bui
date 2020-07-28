<template>
    <button
        class="b-button"
        :class="extraClassName"
        @click="handleClick($event)"
        @touchstart="handleTouch($event)"
        :style="styleText"
        :disabled="disabled">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'b-button',

        props: {
            width: {
                type: Number | String,
                default: 'auto'
            },
            height: {
                type: Number | String,
                default: 30
            },
            type: {
                type: String,
                default: 'default'
            },
            fontSize: {
                type: Number,
                default: 14
            },
            className: String,
            round: Boolean,
            disabled: Boolean
        },

        computed: {
            styleText () {
                let width = typeof this.width === 'number' ? this.width + 'px' : this.width;
                let height = typeof this.height === 'number' ? this.height + 'px' : this.height;
                let style = {
                    width: width,
                    height: height
                };

                return style;
            },

            extraClassName () {
                let className = [`b-button-${this.type}`];
                if (this.round) className.push('b-button-round');
                if (this.disabled) className.push('b-button-disabled');
                if (this.className) className.push(this.className);
                return className;
            }
        },

        methods: {
            handleClick (event) {
                this.$emit('click', event);
            },

            handleTouch (event) {
                this.$emit('touchstart', event);
            }
        }
    };
</script>

<style lang="scss">
    $red: red;
    .b-button {
        font-family: "PingFang SC", "Heiti SC", "San Francisco", "Helvetica", Arial, sans-serif;
        position: relative;
        box-sizing: border-box;
        padding: 0 10px;
        font-size: 14px;
        color: #fff;
        background: $red;
        border-radius: 4px;
        border: none;
        user-select: none;
        outline: none;
        overflow: hidden;

        &.b-button-round {
            border-radius: 999px;
        }

        &.b-button-disabled {
            background: #eee;
            color: #999;
        }
    }

    .b-button-plain {
        background: #fff;
        color: $red;
        border: 1px solid $red;
        border-radius: 4px;

        &.b-button-round {
            border-radius: 999px;
        }

        &.b-button-disabled {
            background: #fff;
            border: 1px solid #ccc;
            color: #999;
        }
    }
</style>
