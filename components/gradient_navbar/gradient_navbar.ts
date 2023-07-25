// components/gradient_navbar/gradient_navbar.ts
Component({
  properties:{
    title:String,
    scroll:String
  },
  methods:{
    onPageScroll(e){
        let opacityPercentage = e/80;
        // console.log(opacityPercentage.toFixed(2).toString());

        if(opacityPercentage <= 1){
            // console.log("debug");
            this.setData({
                text: opacityPercentage.toFixed(2).toString(), 
                opacity: opacityPercentage
            });
            console.log("text",this.data.text);
            console.log("opacity",this.data.opacity);
        }
    }
},
  data:{
    text: "0.00",
    opacity: 0.00
  },
  options:{
      styleIsolation:'isolated'
  },
  lifetimes:{
      attached(){
          let currentPage = getCurrentPages().slice(-1);
          console.log("attached")
      }
  }
})