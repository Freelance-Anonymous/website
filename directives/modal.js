export default {
    bind: function (el, binding, vnode) {
        let modalId;

        if(typeof binding.value === Object(binding.value)) {
            modalId = binding.value.id;
        } else {
            modalId = binding.value;
        }
        
        if(el.tagName !== 'BUTTON') {
            el.setAttribute('role', 'BUTTON');
        }

        el.addEventListener('click', (evt) => {
            evt.preventDefault();

            vnode.context.$root.$emit('show:modal', modalId, vnode.elm);
        });
    }
};
