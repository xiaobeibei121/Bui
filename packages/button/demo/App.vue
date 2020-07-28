<template>
    <div class="demo-button">
        <div class="demo-section">
            <p class="title">default:</p>
            <b-button className="button">测试</b-button>
            <b-button class="button" round>测试</b-button>
            <b-button class="button" round disabled>测试</b-button>
        </div>

        <div class="demo-section">
            <p class="title">plain:</p>
            <b-button class="button" type="plain">测试</b-button>
            <b-button class="button" type="plain" round>测试</b-button>
            <b-button class="button" type="plain" round disabled>测试</b-button>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import BButton from '../index';
    Vue.use(BButton);
    export default {
        name: 'demo-button',
        components: {
            BButton
        }
    };
</script>

<style lang="scss">
    .demo-button {
        .demo-section {
            height: auto;
            background: #fff;
            margin-bottom: 10px;
            font-size: 0;
        }

        .button {
            vertical-align: top;
            margin: 10px 0 10px 16px;
        }
    }
</style>
