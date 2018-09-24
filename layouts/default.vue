<template>
    <div class="site-container">
        <header class="site-header l-header">
            <nav role="navigation">
                <div class="l-header__inner">
                    <transition name="page" v-on:before-leave="afterPageTransition" v-on:after-enter="enterPageTransition">
                        <nuxt-link to="/" v-if="$route.name !== 'index'">
                            <img src="~/assets/fa-logo-small.png" alt="Freelance Anonymous" />
                        </nuxt-link>
                    </transition>

                    <button class="menu-button" v-modal="'menu'" :class="{ 'is-active' : isModalOpen }" type="button" aria-label="Menu">
                        Menu <span class="menu-button__icon"></span>
                    </button>

                    <button class="search" v-modal="'search'" type="button" aria-label="Search" v-if="false">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                            <g transform="scale(.16)">
                                <line fill="none" stroke-width="15" fill-opacity="null" x1="142" y1="142" x2="108" y2="108" stroke-miterlimit="10" stroke-linecap="round" stroke="#fafafa" />

                                <circle cx="65" cy="65" r="57" fill="none" stroke-width="15" fill-opacity="null" stroke="#fafafa"  />
                            </g>
                        </svg>
                    </button>
                </div>

                <transition-shape-modal id="menu" 
                       class="c-modal--menu" 
                       :labelledBy="'main-nav__heading'">
                    <h2 id="main-nav__heading" class="sr-only">Site navigation</h2>

                    <ul class="main-nav">
                        <li class="main-nav__item">
                            <nuxt-link to="/team" @click.native="hideModal" class="main-nav__link">
                                <span class="main-nav__heading">About</span>
                                <span class="main-nav__desc">Get to know who we are, and let's work together.</span>
                            </nuxt-link>
                        </li>

                        <li class="main-nav__item">
                            <nuxt-link to="/projects" @click.native="hideModal" class="main-nav__link">
                                <span class="main-nav__heading">Our projects</span>
                                <span class="main-nav__desc">A mix of client and internal projects for your viewing pleasure.</span>
                            </nuxt-link>
                        </li>

                        <li class="main-nav__item">
                            <nuxt-link to="/faqs" @click.native="hideModal" class="main-nav__link">
                                <span class="main-nav__heading">FAQs</span>
                                <span class="main-nav__desc">Looking to get a simple question answered? check here.</span>
                            </nuxt-link>
                        </li>

                        <li class="main-nav__item">
                            <nuxt-link to="/selected-works" @click.native="hideModal" class="main-nav__link">
                                <span class="main-nav__heading">Our write-ups</span>
                                <span class="main-nav__desc">We also like to write, browse our writings to view topics you find interesting.</span>
                            </nuxt-link>
                        </li>

                        <li class="main-nav__item">
                            <nuxt-link to="/connect" @click.native="hideModal" class="main-nav__link">
                                <span class="main-nav__heading">Let's connect</span>
                                <span class="main-nav__desc">Have a project you would like us to take a look at? Interested in joining us?</span>
                            </nuxt-link>
                        </li>
                    </ul>
                </transition-shape-modal>
            </nav>
        </header>

        <main class="site-content">
            <nuxt />
        </main>

        <transition name="page">
            <footer class="site-footer" v-if="showFooter">
                <hr />

                <p>© 2018 Freelance Anonymous. All rights reserved.</p>
            </footer>
        </transition>
    </div>
</template>

<script>
    import transitionShapeModal from '@/components/transitionShapeModal';
    import modalDirective from '@/directives/modal';
    import modal from '@/components/modal';

    export default {
        data() {
            return {
                isModalOpen: false,
                showFooter: false
            };
        },
        directives: {
            'modal': modalDirective
        },
        components: {
            modal,
            transitionShapeModal
        },
        mounted() {
            this.$root.$on('shown:modal', this.modalShown);
            this.$root.$on('hidden:modal', this.modalHidden);

            if(this.$route.name !== 'index') {
                this.showFooter = true;
            }
        },
        beforeDestroy() {
            this.$root.$off('shown:modal', this.modalShown);
            this.$root.$off('hidden:modal', this.modalHidden);
        },
        methods: {
            afterPageTransition() {
                console.log(this.$route.name, arguments)

                if(this.$route.name === 'index') {
                    this.showFooter = false;
                }
            },
            enterPageTransition() {
                console.log(this.$route.name, arguments)

                if(this.$route.name !== 'index') {
                    this.showFooter = true;
                }
            },
            hideModal() {
                this.$root.$emit('hide:modal', 'menu');
            },
            modalShown(id) {
                if(id === 'menu') {
                    this.isModalOpen = true;
                }
            },
            modalHidden(id) {
                if(id === 'menu') {
                    this.isModalOpen = false;
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "~@/styles/_variables.scss";
    @import "~@/styles/_mixins.scss";

    @mixin close-icon($color: '#333') {
        @include background-svg('<svg viewPort="0 0 32 22" version="1.1" xmlns="http://www.w3.org/2000/svg"><line x1="1" y1="2" x2="31" y2="2" stroke="' + $color + '" stroke-width="2" /><line x1="1" y1="11" x2="31" y2="11" stroke="' + $color + '" stroke-width="2" /><line x1="1" y1="20" x2="31" y2="20" stroke="' + $color + '" stroke-width="2" /></svg>');
    }

    .menu-button {
        font-family: inherit;
        font-size: $font-size-base;
        background: none;
        border: none;
        padding: 0;
        color: $color-dark;
        display: flex;
        transition: .4s cubic-bezier(.95,.18,.71,.7) all;
        margin-left: auto;
        transform-origin: center;
        align-items: center;
        z-index: 20000;

        &__icon {
            @include close-icon();
            display: inline-block;
            width: 32px;
            height: 22px;
            margin-left: 10px;
        }

        &.is-active {
            transform: scale(0);
        }
    }

    body.is-dark {
        .menu-button {
            color: $color-light;

            &__icon {
                @include close-icon($color-light);
            }
        }
    }
</style>
