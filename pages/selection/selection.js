function navigatePage(page){
  if(page == 0){
    console.log("jumprope");
  }
  else if(page == 1){
    console.log("soccer");
  }
}

Page({
  onTabsChange(e){
    navigatePage(e.detail.value);
  }
});
