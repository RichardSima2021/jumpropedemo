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
            {"eventName":"event1","date":"1start-1end"},
            {"eventName":"event2","date":"2start-2end"},
            {"eventName":"event3","date":"3start-3end"},
            {"eventName":"event4","date":"4start-4end"}
        ],
        text: "Hello",
        scrollDist:String,
        enable: false,
        loadingProps:{size:'50rpx'}
    },
    onTabsChange(e){
        navigatePage(e.detail.value);
    },
    onTabsClick(e){
        console.log("Clicked");
    },
    onEventClick(e){
        console.log("Event clicked");
    },
    onPageScroll(e){
        let navBarComponent = this.selectComponent("#navbar");
        let distanceToTop = e.scrollTop;
        navBarComponent.onPageScroll(distanceToTop);
    },
    onRefresh(){
        this.setData({enable:true});
        setTimeout(()=> {this.setData({enable:false});},1500)
    }
}

);
