<template>
    <modal v-bind="$attrs" 
           v-on="$listeners"
           :enter="enter" 
           :beforeEnter="beforeEnter" 
           :leave="leave" :beforeLeave="beforeLeave" 
           :bindCssTransition="false">
        <slot></slot>

        <template slot="backdrop">
            <div class="c-modal__backdrop"></div>
            <div class="c-modal__content-backdrop"></div>
        </template>
    </modal>
</template>

<script>
    import modal from '@/components/modal';

    const sleep = m => new Promise(r => setTimeout(r, m));

    export default {
        components: {
            modal
        },
        methods: {
            beforeEnter(el) {
                const backdrop = el.querySelector('.c-modal__backdrop');
                const close = document.querySelector('.menu-button');

                this.setBackdropPosition(backdrop, close);
            },
            enter(el, done) {
                const backdrop = el.querySelector('.c-modal__backdrop');
                const content = el.querySelector('.c-modal__content');
                const close = document.querySelector('.menu-button');

                this.$nextTick(async () => {
                    this.animateBackdrop(backdrop, close);

                    await sleep(400);

                    content.style.opacity = 1;

                    done();
                });
            },
            leave(el, done) {
                const backdrop = el.querySelector('.c-modal__backdrop');
                const contentBackdrop = el.querySelector('.c-modal__content-backdrop');
                const content = el.querySelector('.c-modal__content');
                const close = document.querySelector('.menu-button');

                this.$nextTick(async () => {
                    // Chrome desktop flubs the animation without this sleep
                    await sleep(10);

                    // Start animating the content backdrop
                    this.animateBackdrop(contentBackdrop, close);

                    // Hide the content
                    content.style.opacity = 0;

                    await sleep(500);

                    // Now hide the modal backdrop and content backdrop
                    backdrop.style.display = 'none';
                    contentBackdrop.style.opacity = 0;
                    this.resetBackdrop(backdrop, close);

                    await sleep(400);

                    backdrop.style.display = '';
                    this.resetBackdrop(contentBackdrop, close);

                    done();
                });
            },
            beforeLeave(el) {
                const contentBackdrop = el.querySelector('.c-modal__content-backdrop');
                const close = document.querySelector('.menu-button');

                this.setBackdropPosition(contentBackdrop, close);
            },
            setBackdropPosition(backdrop, target) {
                backdrop.style.top = (target.getBoundingClientRect().top + (target.clientHeight / 2)) + 'px';
                backdrop.style.left = (target.getBoundingClientRect().left + (target.clientWidth / 2)) + 'px';
            },
            animateBackdrop(backdrop, close) {
                const diameterValue = (Math.sqrt(Math.pow(window.innerHeight, 2) + Math.pow(window.innerWidth, 2)) * 2);

                backdrop.style.transition = '.5s cubic-bezier(.95,.18,.71,.7) all';

                backdrop.style.top = ((diameterValue / 2) * -1) + (close.getBoundingClientRect().top + (close.clientHeight / 2)) + 'px';
                backdrop.style.left = ((diameterValue / 2) * -1) + (close.getBoundingClientRect().left + (close.clientWidth / 2)) + 'px';

                backdrop.style.opacity = 1;
                backdrop.style.transform = 'scale(1) rotate(0)';
                backdrop.style.height = diameterValue + 'px';
                backdrop.style.width = diameterValue+ 'px';
                backdrop.style.borderRadius = '0';
            },
            resetBackdrop(backdrop, close) {
                backdrop.style.opacity = '';
                backdrop.style.transition = '';
                backdrop.style.transform = '';
                backdrop.style.height = '';
                backdrop.style.width = '';
                backdrop.style.borderRadius = '5px';
                backdrop.style.top = (close.getBoundingClientRect().top + (close.clientHeight / 2)) + 'px';
                backdrop.style.left = (close.getBoundingClientRect().left + (close.clientWidth / 2)) + 'px';
            }
        }
    }
</script>

<style lang="scss">
    .c-modal {
        $this: &;

        &--menu {
            #{$this}__content {
                position: relative;
                transition: .5s cubic-bezier(0.35, 0, 0.25, 1) all;
                opacity: 0;
            }

            #{$this}__content-backdrop {
                position: fixed;
                top: 0;
                left: 0;
                right: auto;
                bottom: auto;
                z-index: 10000;
                background-color: #fafafa;
            }

            #{$this}__backdrop, #{$this}__content-backdrop {
                opacity: .9;
                transform: scale(0) rotate(90deg);
                height: 0;
                width: 0;
                right: auto;
                bottom: auto;
                border-radius: 5px;
            }
        }
    }

    body.is-dark {
        .c-modal {
            $this: &;

            @at-root #{$this}__content-backdrop {
                background-color: #1A1920;
            }
        }
    }
</style>
