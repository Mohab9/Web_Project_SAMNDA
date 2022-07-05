function change1() {

    var bgc1 = document.getElementById("bg1").value;

    var fss = document.getElementById("fs").value + "px";

    var fc = document.getElementById("fc1").value;



    var fotnav = document.getElementById("bsc1").value;




    document.getElementById('img').style.backgroundColor = bgc1;
    document.getElementById('container').style.backgroundColor = bgc1;
    document.getElementById('para').style.backgroundColor = bgc1;
  
    document.getElementById("imgpara").style.fontSize = fss;
    document.getElementById("imgpara").style.color = fc;

    document.getElementById("navbar").style.backgroundColor = fotnav;
    document.getElementById('ftr').style.backgroundColor = fotnav;




    var select = document.getElementById('ft');
    var value = select.options[select.selectedIndex].value;
    document.getElementById("imgpara").style.fontFamily = value;


}

function change2() {
    var image = document.createElement("img");
    image.src = "images.jpg";
    if (image.src == document.getElementById("myImg").src) {
        document.getElementById("myImg").src = "22.jpg";
    }
    else {
        document.getElementById("myImg").src = "images.jpg";
    }
}