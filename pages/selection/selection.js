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
        fakeDB:[
            {"eventName":"event1","date":"1start-1end"},
            {"eventName":"event2","date":"2start-2end"},
            {"eventName":"event3","date":"3start-3end"},
            {"eventName":"event4","date":"4start-4end"},
            {"eventName":"event5","date":"5start-5end"},
            {"eventName":"event6","date":"6start-6end"},
            {"eventName":"event7","date":"7start-7end"},
            {"eventName":"event8","date":"8start-8end"},
            {"eventName":"event9","date":"9start-9end"}
        ],
        eventsCache:[

        ],
        text: "Hello",
        scrollDist:String,
        enable: false,
        loadingProps:{size:'50rpx'},
        noMoreContent: false,
        defaultEventListSize: 4 // loads new events 4 at a time
    },
    onTabsChange(e){
        navigatePage(e.detail.value);
    },
    onTabsClick(e){
        console.log("Clicked");
    },
    onEventClick(e){
        // console.log(e);
    },
    onPageScroll(e){
        let navBarComponent = this.selectComponent("#navbar");
        let distanceToTop = e.scrollTop;
        navBarComponent.onPageScroll(distanceToTop);
    },
    onRefresh(){
        this.setData({enable:true});
        setTimeout(()=> {this.setData({enable:false});},1500);
        // this.setData({})
        // this.loadMoreElements();
    },
    onReachBottom(){
        // console.log(this);
        this.loadMoreElements();
    },
    onShow(){
        this.loadMoreElements();
        // console.log("loaded elements");
    },
    loadMoreElements(){
        if(!this.data.noMoreContent){
            let currentEventCacheSize = Object.keys(this.data.eventsCache).length;
            let dbEventListSize = Object.keys(this.data.fakeDB).length;
            let numMoreElements = dbEventListSize - currentEventCacheSize;
            // console.log(numMoreElements);
            if(numMoreElements > this.data.defaultEventListSize){
                numMoreElements = this.data.defaultEventListSize;
            } else{
                this.setData({noMoreContent:true});
            }
            let newEventsCache = this.data.eventsCache.concat(this.data.fakeDB.slice(currentEventCacheSize, currentEventCacheSize+numMoreElements))
            this.setData({eventsCache:newEventsCache});
        }      
    }
}

);
