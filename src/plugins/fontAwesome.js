import { library } from '@fortawesome/fontawesome-svg-core';
import { faBattleNet, faBootstrap, faFontAwesome, faGithub, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { faCrown, faDungeon, faGem, faHammer, faHatWizard, faSkull } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vue from 'vue';

library.add(
    faSkull,
    faCrown,
    faDungeon,
    faHatWizard,
    faHammer,
    faGem,
    faVuejs,
    faBootstrap,
    faFontAwesome,
    faGithub,
    faBattleNet
);

Vue.component('font-awesome-icon', FontAwesomeIcon);
