function navigatePage(page){
  if(page == 0){
    console.log("jumprope");
  }
  else if(page == 1){
    console.log("soccer");
  }
}

Page({
    data:{
        events:[
            {"eventName:":"event1","date":"1start-1end"},
            {"eventName:":"event2","date":"2start-2end"},
            {"eventName:":"event3","date":"3start-3end"},
            {"eventName:":"event3","date":"4start-4end"}
        ],
        text: "Hello",
        scrollDist:String
    },
    onTabsChange(e){
        navigatePage(e.detail.value);
    },
    onTabsClick(e){
        console.log("Clicked");
    },
    onEventClick(e){
        console.log("Event clicked")
    },
    onPageScroll(e){
        // console.log(e.scrollTop)
        threshold = 80
        // console.log(e.scrollTop/80)
        // this.setData({scrollDist: e.scrollTop.toString()}) //能用，但为什么不用？


        console.log(e.scrollTop.toString())
    }
}

);
