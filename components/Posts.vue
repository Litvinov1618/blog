<template>
    <div>
        <a href="/CreateMessage" class="nav">Create message</a>
        <span v-if="notes.length === 0">Here is no posts, write the first one :)</span>
        <div class="item" v-for="(note, index) in notes" :key="index">
            <span class="date">{{note.date.slice(0,17)}}</span>
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
.nav {
    background-color: black;
    color: white;
    border: none;
    border-radius: 3px;
    transition: background-color 0.2s linear;
    font-size: 1em;
    text-decoration: none;
    width: 150px;
    display: block;
    text-align: center;

    padding: 10px 20px;
    &:hover {
        cursor: pointer;
        background-color: lighten(black, 20%);
    }
}
</style>


