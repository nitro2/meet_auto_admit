function admitNow() {
    for(let item of document.getElementsByTagName("span")) {
        if ((item.innerHTML == "Admit") || (item.innerHTML == "Chấp nhận") ){
            item.click();
        }
        else if ( (item.innerHTML == "View all") || (item.innerHTML == "Xem tất cả")){
            item.click();
            setTimeout(function(){item.click();},800);
        }
        
    }
}

// Run this function every 3 seconds
setInterval(admitNow, 3000)