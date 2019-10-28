<template>
    <div @click="click">
        <component :is="getPage()"></component>
    </div>
</template>

<script>
import CreateMsg from './CreateMsg';
import Posts from './Posts';
import NotFoundPage from './NotFoundPage';
import SinglePost from './SinglePost'

export default {
    data: () => ({
        routes: {
            default: NotFoundPage,
            '/': Posts,
            '/CreateMessage': CreateMsg,
            '/SinglePost': SinglePost
        },
        href: location.pathname
    }),
    methods: {
        getPage() {
            return this.routes[this.href] || this.routes.default;
        },

        click(event) {
            if (event.target.tagName !== 'A') return;

            const href = event.target.getAttribute('href');
            if (!href.startsWith('/')) return;

            event.preventDefault();
            history.pushState(null, null, href);
            this.href = href;
        }
    },
    components: {
        CreateMsg,
        Posts,
        SinglePost
    }
}  
</script>