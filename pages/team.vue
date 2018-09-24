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
