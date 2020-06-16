<template>
    <footer class="footer-bar mt-5">
        <PoweredByFoot :icons="icons" />
        <hr class="my-5" />
        <div class="my-5">
            <div class="col-sm-6 mb-sm-0 mb-5">
                <FooterLinks />
            </div>
            <div class="col-sm-6">
                <MadeByFoot />
            </div>
        </div>
    </footer>
</template>

<script>
import MadeByFoot from './MadeByFoot';
import PoweredByFoot from './PoweredByFoot';
import FooterLinks from './FooterLinks';

export default {
    name: 'FooterBar',
    components: {
        MadeByFoot,
        PoweredByFoot,
        FooterLinks,
    },
    data() {
        return {
            icons: [
                {
                    classes: ['fab', 'vuejs'],
                    color: '#4fc08d',
                    href: 'https://vue.js.org/',
                },
                {
                    classes: ['fab', 'bootstrap'],
                    color: '#7952b3',
                    href: 'https://bootstrap-vue.js.org/',
                },
                {
                    classes: ['fab', 'battle-net'],
                    href: 'https://develop.battle.net/documentation/diablo-3/community-apis',
                },
                {
                    classes: ['fab', 'github'],
                    color: '#e4e4e4',
                    href: 'https://github.com/baumannzone',
                },
                {
                    classes: ['fab', 'font-awesome'],
                    color: '#0e95ff',
                    href: 'https://fontawesome.com/',
                },
            ],
        };
    },
};
</script>
