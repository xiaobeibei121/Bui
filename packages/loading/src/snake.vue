<template>
    <div class="b-loading-snake" :style="styleText"></div>
</template>

<script>
    export default {
        name: 'b-loading-snake',
        props: {
            color: String,
            size: Number
        },
        computed: {
            styleText () {
                return {
                    width: `${this.size}px`,
                    height: `${this.size}px`,
                    borderTopColor: this.color,
                    borderLeftColor: this.color,
                    borderBottomColor: this.color
                };
            }
        }
    };
</script>

<style lang="scss">
    .b-loading-snake {
        box-sizing: border-box;
        animation: VLoadingSnake 0.8s infinite linear;
        border: 2px solid transparent;
        border-radius: 50%;
    }

    @keyframes VLoadingSnake {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
