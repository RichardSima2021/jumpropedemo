// components/contest_list/contest_list.ts
Component({
    /**
     * Component properties
     */
    properties: {
        eventList: Array
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
      onScrollToBottom(){
        console.log("scrollToBottom");
      },
    },
    lifetimes:{
      attached(){
          // console.log(this.properties.readEventList)
      }
  }
})
