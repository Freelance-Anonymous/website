<template>
    <div class="p p-home">
        <div class="p-home__logo-container">
            <svg class="p-home__logo" width="100%" height="100%" viewBox="0 0 101 75" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                    <linearGradient x1="38.7558594%" y1="23.7517285%" x2="65.3291016%" y2="58.8500421%" id="linearGradient-1">
                        <stop stop-color="#FAFAFA" offset="0%"></stop>
                        <stop stop-color="#B8B8B8" offset="100%"></stop>
                    </linearGradient>

                    <linearGradient x1="37.8004464%" y1="25.4236048%" x2="93.7525071%" y2="105.855449%" id="linearGradient-2">
                        <stop stop-color="#FAFAFA" offset="0%"></stop>
                        <stop stop-color="#B8B8B8" offset="100%"></stop>
                    </linearGradient>
                </defs>
                <g>
                    <g transform="translate(-16.000000, -29.000000)" fill-rule="nonzero">
                        <g id="Group" transform="translate(16.000000, 29.000000)">
                            <polygon id="Combined-Shape-Copy-3" fill="url(#linearGradient-1)" points="37.1775699 24.7240778 50.9131687 10.988479 94.5057605 54.5810708 100 49.0868313 50.9131687 0 0 50.9131687 5.49423952 56.4074082 31.6833304 30.2183174 75.6372466 74.1722335 81.1314861 68.677994"></polygon>
                            <polygon id="Combined-Shape-Copy-4" fill="url(#linearGradient-2)" points="69.9784509 19 100.290001 49.3115501 94.7058894 54.8956616 69.9843056 30.1740777 43.5841115 56.5742718 38 50.9901603"></polygon>
                        </g>
                    </g>
                </g>
            </svg>
        </div>

        <h1 class="p__heading h2">Freelance Anonymous</h1>

        <div class="p__top-content">
            <p class="p__sub-heading">/ˈfrēˌlans ,əˈnänəməs /</p>

            <ol>
                <li>Collective of industry veterans that are addicted to creating great things.</li>
                <li>A lean &amp; strategic team who specialize in creating POCs (Proof of Concept) for various verticals.</li>
                <li>A resource for best practices on clean and accessible web solutions.</li>
            </ol>

            <div class="p__footer">
                <hr />

                <nuxt-link to="/team">Tell me more</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        head() {
            return {
                titleTemplate: 'Freelance Anonymous',
                bodyAttrs: {
                    class: 'is-dark is-centered'
                }
            };
        }
    }
</script>

<style lang="scss">
    .p-home {
        margin: auto;
        padding-top: 0;

        &__logo-container {
            margin: 0 auto 40px;
            max-width: 200px;
        }

        &__logo {
            width: 200px;
        }

        & .p__top-content {
            margin-bottom: 0;
            max-width: 550px;
        }
    }
</style>
