<template>
    <div class="b-loading">
        ceshi
        <!-- <component :is="componentName" :color="color" :size="size" :text="text"></component> -->
    </div>
</template>

<script>
    // import BLoadingCircle from './circle';
    // import VLoadingSnake from './snake';
    // import VLoadingTripleBounce from './triple-bounce';

    export default {
        name: 'b-loading',
        props: {
            type: {
                type: String,
                required: true
            },
            color: {
                type: String,
                default: '#999'
            },
            size: {
                type: Number,
                default: 20
            },
            text: String
        },

        computed: {
            componentName () {
                return `b-loading-${this.type}`;
            }
        },

        components: {
            // BLoadingCircle
        }
    };
</script>

<style lang="scss">
    .v-loading {
        display: inline-block;
    }
</style>
