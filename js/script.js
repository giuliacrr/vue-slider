


//Let's declare app 
const app = Vue.createApp({
    data() {

        //RETURN
        return {
            slides: [
                {//MILES MORALES
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {//RATCHET & CLANK
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {//FORTNITE
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {//STRAY
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {//AVENGERS
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],
            activeImage: 0
        }
    },
    //METHODS
    methods: {
        nextClick() {
            this.activeImage++;
            if (this.activeImage > this.slides.length - 1) {
                this.activeImage = 0;
            }
        },
        prevClick() {
            this.activeImage--;
            if (this.activeImage < 0) {
                this.activeImage = this.slides.length - 1;
            }
        },
        //Bonus 1
        thumbClick(i) {
            this.activeImage = i;
        }
    },
    mounted() {

        //Bonus 2
        autoplay: setInterval(this.nextClick, 2700)
    },

})
app.mount("#app");