<template>
    <div>
        <b-nav small align="start">
            <b-nav-item :to="{ name: 'Home' }">Home</b-nav-item>
            <b-nav-item :t0="{ name: 'About' }">About</b-nav-item>
            <b-nav-item href="https://github.com/alexMercer94/vue.js-diablo3-app" target="_blank">Github</b-nav-item>
        </b-nav>
    </div>
</template>

<script>
export default {
    name: 'FooterLinks',
};
</script>
