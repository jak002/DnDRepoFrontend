const baseurl = "http://localhost:5235/api/Character"

const app = Vue.createApp({
    data() {
        return {
            name: null,
            level: null,
            characterclass: null,
            subclass: null,
            tokenlink: null,
            searchid: "",
            intro: 'Empty vue.js template',
            undertitle: 'Ripe for customization',
            selectedchar: [],
            characters: [
                /* {
                    name: 'Grape',
                    level: 7,
                    characterClass: 'Grape',
                    subclass:'Grape',
                    campaign: "Azulee's campaign",
                    description: "Grape is Grape. The coolest Grape that ever Grape'd. Can and will sass you. Grape started off as a secondary character, cloned out from an NPC found along the campaign. Quickly, he became a beloved part of the party, and is now a kind of secondary mascot to one of our campaigns."
                },
                {
                    name: 'Moon',
                    level: 15,
                    characterClass: 'Rogue',
                    subclass: 'Swashbuckler',
                    campaign: "Zetius",
                    description: "First character, very fun, much stabby"
                },
                {
                    name: "Sun's chosen",
                    level: 16,
                    characterClass: 'Sorcerer/Warlock',
                    subclass: 'Divine Soul/Fiend',
                    campaign: "Azulee's campaign",
                    description: "First attempt at multiclassing, was broken as fuck"
                },
                {
                    name: "Syrena",
                    level: 2,
                    characterClass: 'Wild Blade',
                    subclass: 'Circle of the Moon',
                    campaign: "Civ's campaign",
                    description: "very druid"
                } */
            ]
        }
    },
    methods: {
        defaultMethod(){

        },
        addToList(){
            this.characters.push({name:this.name,level:this.level,characterClass:this.characterclass,subclass:this.subclass})
        },
        getList(){
            axios.get(baseurl)
            .then(response => {
                console.log("fetched characters successfully");
                console.log("status code: " + response.status);
                this.characters = response.data;
            })
            .catch(error = (ex) => {
                console.log("Error: " + ex.message);
            })
        },
        getById(id){
            specurl = baseurl + "/" + id
            axios.get(specurl)
            .then(response => {
                console.log("fetched character successfully");
                console.log("status code: " + response.status);
                this.selectedchar = [];
                this.selectedchar.push(response.data);
            })
            .catch(error = (ex) => {
                console.log("Error: " + ex.message);
            })
        },
        addToRest(){
            axios.post(baseurl,{"id":0,name:this.name,level:this.level,characterClass:this.characterclass,subclass:this.subclass,campaign:"TBA",description:"this has been added in post :D",token:this.tokenlink})
            .then(response => {
                console.log("it worked! so far");
                console.log("status code: " + response.status);

            })
            .catch(error = (ex) => {
                console.log("Error: " + ex.message);
            })
        }
    },
    computed: {
        defaultComputed(){
            return ''
        },

    }
})