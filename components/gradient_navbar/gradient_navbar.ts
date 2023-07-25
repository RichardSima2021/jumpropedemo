// components/gradient_navbar/gradient_navbar.ts
Component({
  properties:{
    title:String,
    scroll:String
  },
  methods:{
    onPageScroll(e){
        if(this.data.opacity <= 1 && e >= 80){
            this.setData({
                text:"1.00",
                opacity:1.00
            });
        }
        else{
            let opacityPercentage = e/80;
            this.setData({
                text: opacityPercentage.toFixed(2).toString(), 
                opacity: opacityPercentage
            });
            // console.log("text",this.data.text);
            // console.log("opacity",this.data.opacity);
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