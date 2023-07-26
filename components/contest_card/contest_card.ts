// components/contest_card.ts
Component({
    /**
     * Component properties
     */
    properties: {
        eventTitle:String,
        eventDate:String
    },

    /**
     * Component initial data
     */
    data: {

    },

    /**
     * Component methods
     */
    methods: {
      onClick(){
        console.log("Event Clicked");
      }
    }
})
