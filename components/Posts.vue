<template>
    <div>
        <div class="item" v-for="(note, index) in notes" :key="index">
            <span class="date">{{note.date}}</span>
            <h2>{{note.header}}</h2>
            <p class="text">{{note.text}}</p>
        </div>
    </div>
</template>

<script>
import Storage from '../local-storage'

export default {
    data: () => ({
        notes: Storage.getItem('notes') || []
    })
}
</script>

<style lang="scss" scoped>
    .item {
        padding: 10px;
        border: 2px solid grey;
        border-radius: 5px;
        margin: 15px 0;
    }
    .date {
        color: grey;
    }
</style>


