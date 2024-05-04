
var cart= JSON.parse(localStorage.getItem("cart"));
    if(cart!=null){
      var gioHang=cart;

    }
    else{
    var gioHang=[];

    }

var btn = document.getElementsByClassName("btn_shop");

for (let i=0;i<btn.length;i++){
    btn[i].addEventListener("click",function(){
        var hinh = btn[i].parentElement.childNodes[1].src;
    var ten = btn[i].parentElement.childNodes[7].textContent;
    var gia = btn[i].parentElement.childNodes[9].textContent;
    console.log(gia)
    var soLuong = 1;
    var sp= {
        'hinh':hinh,
        'ten':ten,
        'gia':gia,
        'soluong':soLuong
    }
    gioHang.push(sp)
    localStorage.setItem("cart",JSON.stringify(gioHang));
    getsoLuongSP();
    });
    
}


//load cart
function loadDataCart(){
    getsoLuongSP();
    showcart();
    total();
}

function showcart(){
    var cart= JSON.parse(localStorage.getItem("cart"));
    if(cart!=null){
        var kq="";
        for (let i = 0; i < cart.length; i++) {
            var tt=parseFloat(cart[i]["gia"]* cart[i]["soluong"]);
            kq+=` <tr>
                    <td><img src="`+cart[i]["hinh"]+`" height="80px">
                    `+cart[i]["ten"]+`
                    </td>
                    <td>
                    `+cart[i]["gia"]+`</td>
                    <td>`+cart[i]["soluong"]+`</td>
                    <td>`+tt+`</td>
                    <td></td>
            </tr>`;
        }
        document.getElementById("thongtingiohang").innerHTML=kq;
    }

}


//load trang chu
function loadSLSP(){
   getsoLuongSP();
    showcart();
}

function getsoLuongSP(){
    var cart= JSON.parse(localStorage.getItem("cart"));
    if(cart!=null){
        document.getElementById("slsp").innerHTML=cart.length;
    }
}
function delcart(){
    localStorage.removeItem("cart");
}

function thanhtoan(){
    var cart= JSON.parse(localStorage.getItem("cart"));
    if(cart!=null){
        alert("Sucess")
        localStorage.removeItem("cart");
        window.location="index.html";
    }
}
function total(){
    var cart= JSON.parse(localStorage.getItem("cart"));
    if(cart!=null){
        var total=0;
        for (let i = 0; i < cart.length; i++) {
            var tt=parseFloat(cart[i]["gia"]* cart[i]["soluong"]);
            total+=tt;
        }
        document.getElementById("tongdonhang").innerHTML=total;       
}   
}