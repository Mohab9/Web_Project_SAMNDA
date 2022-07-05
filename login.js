function openpg(){
    
    var a = document.getElementById("txt").value;
    var b = document.getElementById("pass").value;
     if((a=="sohyb"||a=="mohab"||a=="nourhan"||a=="doha"||a=="ahmed") &&( b=="123"))
        {
         alert("Welcome back " + "\" " + a + " \" " )
         window.top.close();
         window.open("HOME.html")
        
        }
   
        else if ((a=="sohyb"||a=="mohab"||a=="nourhan"||a=="doha"||a=="ahmed") &&( b!="123"))
        {
            alert("\" " + a + " \" "  +"You Have Entered Wrong Password")
        }
        else if ((a=="admin") &&( b=="admin"))
        {
            alert("Welcome back " + "\" " + a + " \" " )
             window.top.close();
             window.open("admin.html")
        }
        else  
        {
        alert("\" " + a + " \" "  + " You Don't Have an Account ... \n Sign Up First. "  )
         window.top.close();
        window.open("Register.html")
        }
 }