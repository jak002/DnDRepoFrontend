/* const baseurl = "http://localhost:5235/api/Character" */
const baseurl = "http://dndrest.mewnlightro.se/api/Character"

const app = Vue.createApp({
    data() {
        return {
            name: null,
            level: null,
            characterclass: null,
            subclass: "",
            tokenlink: "",
            searchid: "",
            statussuccess: " ",
            statuserror: " ",
            update: false,
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
            this.statussuccess = " "
            this.statuserror = " "
            axios.get(baseurl)
            .then(response => {
                console.log("fetched characters successfully");
                console.log("status code: " + response.status);
                this.characters = response.data;
            })
            .catch(error = (ex) => {
                console.log("Error: " + ex.message);
                this.statuserror = "couldn't get characters. " + ex.message
            })
        },
        getById(id){
            if(id == "") {
                this.selectedchar = [];
            } else {
            this.statussuccess = " ";
            this.statuserror = " ";
            specurl = baseurl + "/" + id;
            axios.get(specurl)
            .then(response => {
                console.log("fetched character successfully");
                console.log("status code: " + response.status);
                this.selectedchar = [];
                this.selectedchar.push(response.data);

            })
            .catch(error = (ex) => {
                console.log("Error: " + ex.message);
                this.statuserror = "couldn't find character. " + ex.message

            }
            )
            }
        },
        addToRest(){
            this.statussuccess = " "
            this.statuserror = " "
            axios.post(baseurl,{"id":0,name:this.name,level:this.level,characterClass:this.characterclass,subclass:this.subclass,campaign:"TBA",description:"TBA",token:this.tokenlink})
            .then(response => {
                console.log("it worked! so far");
                console.log("status code: " + response.status);
                this.statussuccess = 'character added!'
                this.characters = response.data;

            })
            .catch(error = (ex) => {
                console.log("Error: " + ex.message);
                this.statuserror = "character couldn't be added. " + ex.message
            })
        },
        deleteFromRest(){
            this.statussuccess = " "
            this.statuserror = " "
            specurl = baseurl + "/" + this.selectedchar[0].id
            axios.delete(specurl)
            .then(response => {
                console.log("character successfully murderized")
                this.selectedchar = []
                this.statussuccess = 'character successfully murdered. goodbye :c'
                this.characters = response.data;
            }
            )
            .catch(error => {
                console.log("Error: " + error.message);
                this.statuserror = "couldn't delete. " + error.message
            })
        },
        updateRest(){
            this.update = false
            this.statussuccess = " "
            this.statuserror = " "
            specurl = baseurl + "/" + this.selectedchar[0].id
            axios.put(specurl,{"id":this.selectedchar[0].id,name:this.selectedchar[0].name,level:this.selectedchar[0].level,characterClass:this.selectedchar[0].characterClass,subclass:this.selectedchar[0].subclass,campaign:this.selectedchar[0].campaign,description:this.selectedchar[0].description,token:this.selectedchar[0].token})
            .then(response => {
                console.log("hoo boy this werks")
                this.statussuccess = 'character successfully updated!'
                this.characters = response.data;
            })
            .catch(error => {
                console.log("Error: " + error.message)
                this.statuserror = "couldn't update. " + error.message
            })
        }
    },
    computed: {
        defaultComputed(){
            return ''
        },

    }
})