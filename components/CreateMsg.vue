<template>
    <form>
        <template class="notices">
            <template v-if="!message && !header">Let's write something :)</template>
            <template v-if="message || header">
                <template v-if="header.length < 5">Header is too short</template>
                <template v-else-if="message.length < 10">Post is too short</template>
            </template>
            <template v-if="message.length >= 10 && header.length >= 5">Okay, lets push!</template>
        </template>
        <input type="text" placeholder="Your header" v-model="header" autofocus>
        <textarea rows="10" v-model="message" placeholder="Your text"></textarea>
        <a @click="pushNote()" href="/" class="nav" :disabled="message.length < 10 || header < 5">Push</a>
    </form>
</template>

<script>
import Storage from '../local-storage'

export default {
    data: ()=> ({
        message: '',
        header:'',
        notes: Storage.getItem('notes') || []
    }),
    methods: {
        pushNote() {
            const newNote = {date: new Date().toLocaleString(), text: this.message, header: this.header};
            this.notes.unshift(newNote);
            Storage.setItem(`notes`, this.notes);
            this.message = '';
            this.header = '';
        }
    }
}
</script>

<style lang='scss' scoped>
form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 350px;
    align-items: center;
}
textarea {
    resize: none;
    font-size: 1em;
    caret-color: grey;
    width: 85%;
}
.submit { 
    background-color: black;
    color: white;
    border: none;
    border-radius: 3px;
    transition: background-color 0.2s linear;
    font-size: 1em;
    width: 100px;
    padding: 10px 20px;

    &:hover {
        cursor: pointer;
        background-color: lighten(black, 20%);
    }
}
.notices {
    display: flex;
    justify-content: space-around;
}
.nav {
    background-color: black;
    color: white;
    border: none;
    border-radius: 3px;
    transition: background-color 0.2s linear;
    font-size: 1em;
    text-decoration: none;
    width: 50px;
    display: block;
    text-align: center;
    padding: 10px 20px;
    
    &:hover {
        cursor: pointer;
        background-color: lighten(black, 20%);
    }
}
.nav[disabled] {
    pointer-events: none;
    background-color: rgba(128, 128, 128, 0.459);

    &:hover {
        background-color: lighten(rgba(128, 128, 128, 0.459), 20%);
    }
}
</style>