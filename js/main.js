const app = Vue.createApp({
    data() {
        return {
            name: null,
            level: null,
            characterclass: null,
            subclass: null,
            intro: 'Empty vue.js template',
            undertitle: 'Ripe for customization',
            characters: [
                {
                    name: 'Grape',
                    level: 7,
                    class: 'Grape',
                    subclass:'Grape',
                    campaign: "Azulee's campaign",
                    description: "Grape is Grape. The coolest Grape that ever Grape'd. Can and will sass you. Grape started off as a secondary character, cloned out from an NPC found along the campaign. Quickly, he became a beloved part of the party, and is now a kind of secondary mascot to one of our campaigns."
                },
                {
                    name: 'Moon',
                    level: 15,
                    class: 'Rogue',
                    subclass: 'Swashbuckler',
                    campaign: "Zetius",
                    description: "First character, very fun, much stabby"
                },
                {
                    name: "Sun's chosen",
                    level: 16,
                    class: 'Sorcerer/Warlock',
                    subclass: 'Divine Soul/Fiend',
                    campaign: "Azulee's campaign",
                    description: "First attempt at multiclassing, was broken as fuck"
                },
                {
                    name: "Syrena",
                    level: 2,
                    class: 'Wild Blade',
                    subclass: 'Circle of the Moon',
                    campaign: "Civ's campaign",
                    description: "very druid"
                }
            ]
        }
    },
    methods: {
        defaultMethod(){

        },
        addToList(){
            this.characters.push({name:this.name,level:this.level,class:this.characterclass,subclass:this.subclass})
        }
    },
    computed: {
        defaultComputed(){
            return ''
        },

    }
})