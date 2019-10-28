const storage = {
    setItem(name, value) {
        localStorage.setItem(name, JSON.stringify(value))
    },
    getItem(name) {
        return JSON.parse(localStorage.getItem(name))
    },
    getItemByIndex (index) {
        const obj = JSON.parse(localStorage.getItem('notes'));
        return obj[index]
    },
    removeItem(name) {
        localStorage.remove(name)
    }
}

module.exports = storage
