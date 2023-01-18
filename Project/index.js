let arr=[
    "https://cdn.shopclues.com/images/banners/2023/Jan/17/HB1_AutomotiveSale_Web_Riya_17Jan22.jpg",
    "https://cdn.shopclues.com/images/banners/2023/Jan/17/HB2_Web_JMAX_Esha_17Jan23.jpg",
    "https://cdn.shopclues.com/images/banners/2023/Jan/17/Jdd_HB3_Web_Riya_17Jan22.jpg",
    "https://cdn.shopclues.com/images/banners/2023/Jan/17/HB4_MensClothing_Web_Esha_17Jan23.jpg",

];
let val=0;
setInterval(()=>{
    let img=document.createElement("img");
    img.setAttribute("src",arr[val]);
    document.getElementById("slideshow").innerHTML=null;
    document.getElementById("slideshow").append(img);
    val++;
    if(val==arr.length) val=0;

    
},2000);