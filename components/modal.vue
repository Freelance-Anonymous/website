<template>
    <transition v-bind:name="transitionName"
                v-on:before-enter="beforeEnter"
                v-on:enter="enter"
                v-on:before-leave="beforeLeave"
                v-on:leave="leave"
                v-bind:css="bindCssTransition">
        <div ref="modal"
             v-bind="modalAttributes"
             :class="modalClasses" 
             @focusout="onFocusOut" 
             @keydown="onKeyDown" 
             @keyup="onKeyUp" 
             v-show="isOpen">
            <div class="c-modal__wrapper">
                <div class="c-modal__container">
                    <div class="c-modal__content">
                        <button class="c-modal__close hamburger hamburger--spin" 
                                :class="{ 'is-active' : isOpen }" 
                                type="button" 
                                aria-label="Close" 
                                @click="closeLocalModal"
                                v-if="showClose">
                            <span class="hamburger-box">
                                <span class="hamburger-inner"></span>
                            </span>
                        </button>

                        <slot :closeModal="closeLocalModal"></slot>
                    </div>
                </div>
            </div>

            <slot name="backdrop">
                <div class="c-modal__backdrop" v-if="showBackdrop"></div>
            </slot>
        </div>
    </transition>
</template>

<script>
    /*
        Key bindings
            ✓ Tab
            ✓ Shift + Tab
            ✓ Escape - add global document escape handler

        Interactions
            ✓ Focus on first element
            ✓ Focus trap
            ✓ Add role="button" if not a button
            ✓ Return focus to calling element on close
            Add padding right on modal open

        Events
            Watches:
                Show
                Hide

            Emits:
                Shown
                Hidden

        Properties
            role
            ...
    */

    const focusableElementsList ='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

    export default {
        name: 'modal',
        props: {
            transitionName: {
                type: String,
                default: 'fade'
            },
            extraClasses: {
                type: String
            },
            role: {
                type: String,
                default: 'modal'
            },
            labelledBy: {
                type: String
            },
            describedBy: {
                type: String
            },
            showClose: {
                type: Boolean,
                default: true
            },
            showBackdrop: {
                type: Boolean,
                default: true
            },
            beforeEnter: {
                type: Function,
                default: () => {}
            },
            enter: {
                type: Function,
                default: () => {}
            },
            beforeLeave: {
                type: Function,
                default: () => {}
            },
            leave: {
                type: Function,
                default: () => {}
            },
            bindCssTransition: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                isOpen: false,
                srcElement: null
            };
        },
        mounted() {
            this.$root.$on('show:modal', this.openModal);
            this.$root.$on('hide:modal', this.closeModal);
        },
        methods: {
            openModal(menuId, srcElement) {
                let focusableElements;

                if(this.modalId === menuId) {
                    focusableElements = this.$el.querySelectorAll(focusableElementsList);

                    this.isOpen = true;
                    this.srcElement = srcElement;

                    this.$nextTick(() => {
                        focusableElements[0].focus();
                        this.$root.$emit('shown:modal', menuId, this.srcElement);
                        document.body.style.overflow = 'hidden';
                    });
                }
            },
            closeModal(menuId) {
                if(this.modalId === menuId) {
                    this.isOpen = false;

                    if(this.srcElement) {
                        this.srcElement.focus();
                        document.body.style.overflow = 'visible';
                    }

                    this.$root.$emit('hidden:modal', menuId, this.srcElement);
                }
            },
            closeLocalModal() {
                this.closeModal(this.modalId, this.srcElement);
            },
            onKeyUp(evt) {
               if(evt.keyCode === 27) {
                    this.closeModal(this.modalId);
                }
            },
            onKeyDown(evt) {
                const focusableElements = this.$el.querySelectorAll(focusableElementsList);

                if((evt.keyCode === 9) && !evt.shiftKey && (evt.srcElement === focusableElements[focusableElements.length - 1])) {
                    setTimeout(() => {
                        focusableElements[0].focus();
                    });
                }

                if((evt.keyCode === 9) && evt.shiftKey && (evt.srcElement === focusableElements[0])) {
                    setTimeout(() => {
                        focusableElements[focusableElements.length - 1].focus();
                    });
                }
            },
            onFocusOut(evt) {
                if (this.isOpen && !this.$refs.modal.contains(evt.relatedTarget)) {
                    this.$el.focus();
                }
            }
        },
        computed: {
            modalClasses() {
                return [
                    'c-modal',
                    this.isOpen ? 'is-open' : '',
                    this.extraClasses
                ];
            },
            modalAttributes() {
                return {
                    tabindex: '-1',
                    role: this.role,
                    'aria-labelledby': this.labelledBy,
                    'aria-describedby': this.describedBy,
                    'aria-modal': 'true'
                };
            },
            modalId() {
                return this.$el.getAttribute('id');
            }
        }
    }
</script>

<style lang="scss">
    .c-modal {
        $this: &;

        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow-x: hidden;
        overflow-y: auto;
        display: flex;

        &__wrapper {
            z-index: 10010;
            display: flex;
            min-height: 0;
            flex: 1;
        }

        &__container {
            margin: auto;
        }

        &__backdrop {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 10000;
        }
    }

    .fade-enter-active, .fade-leave-active {
        transition: all .5s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
        top: -20px;
    }
</style>
