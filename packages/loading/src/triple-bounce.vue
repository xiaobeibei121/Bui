<template>
    <div class="b-loading-triple-bounce" :style="{ height: size + 'px' }">
        <div class="b-loading-triple-bounce-1" :style="bounceStyle"></div>
        <div class="b-loading-triple-bounce-2" :style="bounceStyle"></div>
        <div class="b-loading-triple-bounce-3" :style="bounceStyle"></div>
    </div>
</template>

<script>
    export default {
        name: 'b-loading-triple-bounce',
        props: {
            size: Number,
            color: String
        },
        computed: {
            spinnerSize () {
                return this.size + 'px';
            },
            bounceStyle () {
                return {
                    width: this.spinnerSize,
                    height: this.spinnerSize,
                    backgroundColor: this.color
                };
            }
        }
    };
</script>

<style lang="scss">
    .b-loading-triple-bounce {
        .b-loading-triple-bounce-1,
        .b-loading-triple-bounce-2,
        .b-loading-triple-bounce-3 {
            border-radius: 100%;
            display: inline-block;
            vertical-align: top;
            animation: VLoadingTripleBounce 1.4s infinite ease-in-out both;
        }

        .b-loading-triple-bounce-1 {
            animation-delay: -0.32s;
        }

        .b-loading-triple-bounce-2 {
            animation-delay: -0.16s;
        }
    }

    @keyframes VLoadingTripleBounce {
        0%,
        80%,
        100% {
            transform: scale(0);
        }
        40% {
            transform: scale(1.0);
        }
    }
</style>
