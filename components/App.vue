<template>
    <div>
        <h1 class="header">{{header}}</h1>
        <CreateMsg></CreateMsg>
        <Posts></Posts>
    </div>
</template>

<script>
import CreateMsg from './CreateMsg';
import Posts from './Posts';


export default {
    data: () => ({
        header: 'Blog',
    }),
    components: {
        CreateMsg,
        Posts
    }
}
</script>

<style lang="scss" scoped>
    .main {
        width: 80%;
        margin: 0 auto;
    }
    .header {
        text-align: center;
    }
</style>