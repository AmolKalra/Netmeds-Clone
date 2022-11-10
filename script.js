//Slider js start

var span = document.querySelectorAll("#payment-offer-slider > span");
var div = document.querySelectorAll("#payment-offer-slider > section > div");
var len = 0;
span[1].onclick = ()=>{
    len++;
    for(var i of div){
        if(len==0){
            i.style.left="0px";
        }
        if(len==1){
            i.style.left = "-740px";
        }
        if(len==2){
            i.style.left="-1480px";
        }
        if(len==3){
            i.style.left = "-2220px";
        }
        if(len==4){
            i.style.left="-2960px";
        }
        if(len>4){
            len==4;
        }
    }
}
span[0].onclick = ()=>{
    len--;
    for(var i of div){
        if(len==0){
            i.style.left="0px";
        }
        if(len==1){
            i.style.left = "-740px";
        }
        if(len==2){
            i.style.left="-1480px";
        }
        if(len==3){
            i.style.left = "-2220px";
        }
        if(len<0){
            len==0;
        }
    }
}
//Slider js end



var span2 = document.querySelectorAll("#trend > span");
var div2 = document.querySelectorAll("#trend > section > div");
var len2 = 0;
span2[1].onclick = ()=>{
    len2++;
    for(var i of div2){
        if(len2==0){
            i.style.left="0px";
        }
        if(len2==1){
            i.style.left = "-740px";
        }
        if(len2==2){
            i.style.left="-1480px";
        }
        if(len2==3){
            i.style.left = "-2220px";
        }
        if(len2==4){
            i.style.left="-2960px";
        }
        if(len2>4){
            len2==4;
        }
    }
}
span2[0].onclick = ()=>{
    len2--;
    for(var i of div2){
        if(len2==0){
            i.style.left="0px";
        }
        if(len2==1){
            i.style.left = "-740px";
        }
        if(len2==2){
            i.style.left="-1480px";
        }
        if(len2==3){
            i.style.left = "-2220px";
        }
        if(len2<0){
            len2==0;
        }
    }
}
//Slider js end

//cat slider
var span3 = document.querySelectorAll("#ShopByCat-section > span");
var div3 = document.querySelectorAll("#ShopByCat-section > section > div");
var len3 = 0;
span3[1].onclick = ()=>{
    len3++;
    for(var i of div3){
        if(len3==0){
            i.style.left="0px";
        }
        if(len3==1){
            i.style.left = "-740px";
        }
        if(3==2){
            i.style.left="-1480px";
        }
        if(len3==3){
            i.style.left = "-2220px";
        }
        if(len3==4){
            i.style.left="-2960px";
        }
        if(len3>4){
            len3==4;
        }
    }
}
span3[0].onclick = ()=>{
    len3--;
    for(var i of div3){
        if(len3==0){
            i.style.left="0px";
        }
        if(len3==1){
            i.style.left = "-740px";
        }
        if(len3==2){
            i.style.left="-1480px";
        }
        if(len3==3){
            i.style.left = "-2220px";
        }
        if(len3<0){
            len3==0;
        }
    }
}