<template>
    <div>   
        <h1 class="header">{{header}}</h1>
        <CreateMsg @createNote="sendNote"></CreateMsg>
        <Posts :notes="notes"></Posts>
    </div>
</template>
<script>
export default {   
}
</script>