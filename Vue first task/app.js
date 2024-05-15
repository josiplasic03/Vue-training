const application = Vue.createApp({
    data() {
        return {
            name: "Josip",
            age: 20,
            image: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
        }
    },

    methods: {

        agePlusFive() {
            return this.age + 5;
        },

        generateFavouriteNumber() {
            const favNum = Math.random();
            return favNum;
        }
    }
}).mount("#assignment");
