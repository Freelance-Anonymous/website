<template>
    <div class="site-container">
        <header class="site-header l-header">
            <nav role="navigation">
                <div class="l-header__inner">
                    <button class="hamburger hamburger--spin menu-button" v-modal="'menu'" :class="{ 'is-active' : isModalOpen }" type="button" aria-label="Menu">
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </button>

                    <transition name="page" v-on:before-leave="afterPageTransition" v-on:after-enter="enterPageTransition">
                        <nuxt-link to="/" v-if="$route.name !== 'index'">
                            <img src="~/assets/fa-logo-small.png" alt="Freelance Anonymous" />
                        </nuxt-link>
                    </transition>

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
                                <span class="main-nav__heading">Our Team</span>
                                <span class="main-nav__desc">Get to know who we are, and let's work together</span>
                            </nuxt-link>
                        </li>

                        <li class="main-nav__item">
                            <nuxt-link to="/projects" @click.native="hideModal" class="main-nav__link">
                                <span class="main-nav__heading">Our Projects</span>
                                <span class="main-nav__desc">Some of our internal projects we are working on</span>
                            </nuxt-link>
                        </li>

                        <li class="main-nav__item">
                            <nuxt-link to="/selected-works" @click.native="hideModal" class="main-nav__link">
                                <span class="main-nav__heading">Selected Works</span>
                                <span class="main-nav__desc">Want to see what we have done for others? Here are some, more in person ;)</span>
                            </nuxt-link>
                        </li>

                        <li class="main-nav__item">
                            <nuxt-link to="/faqs" @click.native="hideModal" class="main-nav__link">
                                <span class="main-nav__heading">FAQs</span>
                                <span class="main-nav__desc">Looking to get a simple question answered? Click here</span>
                            </nuxt-link>
                        </li>

                        <li class="main-nav__item">
                            <nuxt-link to="/connect" @click.native="hideModal" class="main-nav__link">
                                <span class="main-nav__heading">Let's Connect</span>
                                <span class="main-nav__desc">Have a project you would like us to take a look at? Interested in joining us?</span>
                            </nuxt-link>
                        </li>
                    </ul>
                </transition-shape-modal>

                <modal id="search" class="c-modal--search">
                    <template>
                        Search <input type="text" placeholder="search goes here">
                    </template>
                </modal>
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
