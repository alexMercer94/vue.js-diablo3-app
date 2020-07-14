import Vue from 'vue';

Vue.directive('focus', {
    /**
     * inserted hook: Cuando el elemento es insertado en el DOM
     * @param el {HTMLElement} El elemento al que está dirigida la directiva
     */
    inserted: el => {
        el.focus();
    }
});

Vue.directive('diablo', {
    /**
     * @param el {HTMLElement} Elemento al que aplica la directiva
     * @param binding {DirectiveBinding} Datos que recibe la directiva a traves de argumentos, modificadores, etc
     */
    bind: (el, binding) => {
        const color = {
            bone: '#e8dcc2',
            white: '#fff'
        };

        el.style.fontFamily = 'DiabloHeavy, sans-serif';

        console.log(binding);
        // Argumento (`:`)
        const arg = binding.arg === 'bone' ? 'bone' : 'white';
        if (arg === 'bone') {
            el.style.color = color.bone;
        } else {
            el.style.calor = color.white;
        }

        // Modificadores (`.`)
        if (Object.keys(binding.modifiers).length > 0) {
            const value = binding.value || 1;
            const borderExp = `${value}px solid ${color[arg]}`;

            if (binding.modifiers.bottom) {
                el.style.borderBottom = borderExp;
                el.style.paddingBottom = '10px';
            }

            if (binding.modifiers.top) {
                el.style.borderTop = borderExp;
                el.style.paddingTop = '10px';
            }
        }
    }
});
