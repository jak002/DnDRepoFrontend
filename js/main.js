/* const baseurl = "http://localhost:5235/api/Character" */
const baseurl = "https://dndrest.mewnlightro.se/api/Character"

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
            characters: []
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
            this.statussuccess = " ";
            this.statuserror = " ";
            if(id == "") {
                this.selectedchar = [];
            } else if(id == "404") {
                this.selectedchar.push({name:"Not",level:404,characterClass:"error",subclass:"internal",campaign:"Revenge of the Server",description:"congratulations, Not has been found. that's what you wanted, right? that's the funny joke you were going for, right? satisfied? ffs"})
            }
            else {

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
                this.selectedchar = [];
            }
            )
            }
        }
    },
    computed: {
        defaultComputed(){
            return ''
        },

    }
})