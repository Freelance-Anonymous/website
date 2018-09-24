<template>
    <div class="p p-team">
        <h1 class="p__heading">Who are we?</h1>

        <div class="p__top-content">
            <p class="p__sub-heading">/ˈproduct specialists, developers, designers, gamers, creatives, nerds /</p>

            <ol>
                <li>We are a collective of industry veterans that want to focus on projects that we enjoy and believe in. Our goal is to be as passionate about your projects as if it were our own.</li>
            </ol>
        </div>

        <div class="l-grid is-col-3">
            <div class="c-card">
                <div class="c-card__media">
                    <img src="~/assets/jerico-angeles.png" alt="" />
                </div>

                <div class="c-card__header">
                    <h2 class="c-card__title h3">Jerico Angeles</h2>
                    <p class="c-card__subtitle">/ˈuser experience &amp; creative strategy /</p>
                </div>

                <div class="c-card__content">
                    <p>A Creative Director and Product Specialist that has built and lead teams to launch products for HBO, Claró Video, and various startups.</p>
                    <p>A multi-disciplinary design leader with over 10 years experience, Jerico has taken products from concept to finish for BOTH physical and digital products.</p>
                </div>
            </div>

            <div class="c-card">
                <div class="c-card__media">
                    <img src="~/assets/justin-myers.png" alt="" />
                </div>

                <div class="c-card__header">
                    <h2 class="c-card__title">Justin Myers</h2>
                    <p class="c-card__subtitle">/ˈfront-end engineering &amp; accessibility /</p>
                </div>

                <div class="c-card__content">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                </div>
            </div>

            <div class="c-card">
                <div class="c-card__media">
                    <img src="~/assets/aaron-bickle.png" alt="" />
                </div>

                <div class="c-card__header">
                    <h2 class="c-card__title">Aaron Bickle</h2>
                    <p class="c-card__subtitle">/ˈback-end engineering &amp; architecture /</p>
                </div>

                <div class="c-card__content">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                </div>
            </div>
        </div>

        <hr />

        <div class="c-client-list">
            <h2 class="c-client-list__heading h5">Brands we've collectively worked with</h2>

            <div class="l-grid is-list">
                <span class="c-client-list__icon">
                    <img src="//placehold.it/120x60" />
                    <span class="sr-only">Client 1</span>
                </span>

                <span class="c-client-list__icon">
                    <img src="//placehold.it/50x100" />
                    <span class="sr-only">Client 2</span>
                </span>

                <span class="c-client-list__icon">
                    <img src="//placehold.it/90x75" />
                    <span class="sr-only">Client 3</span>
                </span>

                <span class="c-client-list__icon">
                    <img src="//placehold.it/75x75" />
                    <span class="sr-only">Client 4</span>
                </span>

                <span class="c-client-list__icon">
                    <img src="//placehold.it/100x80" />
                    <span class="sr-only">Client 5</span>
                </span>

                <span class="c-client-list__icon">
                    <img src="//placehold.it/120x60" />
                    <span class="sr-only">Client 6</span>
                </span>

                <span class="c-client-list__icon">
                    <img src="//placehold.it/50x100" />
                    <span class="sr-only">Client 7</span>
                </span>

                <span class="c-client-list__icon">
                    <img src="//placehold.it/90x75" />
                    <span class="sr-only">Client 8</span>
                </span>

                <span class="c-client-list__icon">
                    <img src="//placehold.it/75x75" />
                    <span class="sr-only">Client 9</span>
                </span>

                <span class="c-client-list__icon">
                    <img src="//placehold.it/100x80" />
                    <span class="sr-only">Client 10</span>
                </span>
            </div>
        </div>

        <hr />

        <div class="c-contact">
            <h2 class="h2">Interested in joining us?</h2>

            <div class="p__top-content is-inline">
                <p class="p__sub-heading">/ˈcalling all do-ers /</p>

                <ol>
                    <li>We are always looking for talented people to collaborate with.  Send us your info and someone from our leadership team will reach out to you.</li>
                </ol>
            </div>

            <form class="c-form" action="">
                <div class="c-form__group">
                    <label for="contact-email" class="sr-only">Email address</label>
                    <input id="contact-email" class="c-form__input" type="email" placeholder="Your email address" />
                </div>

                <div class="c-form__group">
                    <label for="contact-url" class="sr-only">Your URL (or title)</label>
                    <input id="conatct-url" class="c-form__input" type="text" placeholder="Your URL (or title)" />
                </div>

                <button class="c-form__submit" type="submit">Send it over</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        head() {
            return {
                title: 'Team'
            }
        }
    }
</script>

<style lang="scss">
    @import "~@/styles/_variables.scss";

    .c-client-list {
        padding: 40px 30px;

        &__heading {
            text-align: center;
            margin-bottom: 40px;
        }
    }

    @media only screen and (min-width: 768px) {
        .c-client-list {
            &__heading {
                margin-bottom: 60px;
            }
        }
    }

    .c-contact {
        background-color: #F3F3F3;
        padding: 40px;
    }

    .c-form {
        &__group {
            margin-bottom: 40px;
        }

        &__input {
            display: block;
            width: calc(100% - 20px);
            background: none;
            border: none;
            border-bottom: 1px solid #ccc;
            padding: 15px 10px;
            font-size: inherit;
            font-family: inherit;
            font-style: italic;
        }

        &__submit {
            font-family: $font-family-serif;
            font-size: inherit;
            font-weight: 700;
            font-style: italic;
            border: none;
            background: none;
            display: flex;
            margin-left: auto;
        }
    }
</style>

