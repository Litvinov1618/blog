const storage = {
    setItem(name, value) {
        localStorage.setItem(name, JSON.stringify(value))
    },
    getItem(name) {
        return JSON.parse(localStorage.getItem(name))
    },
    removeItem(name) {
        localStorage.remove(name)
    }
}

module.exports = storage
