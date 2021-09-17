var para1 = document.getElementById("invalid");
function verif(name,description,pages,number,category)
{
    var bool = true;
    var num = 0;
    var regText = /^[a-zA-Z0-9,?. 'éèàç]{5,}$/;
    var regName = /^[a-zA-Z0-9,?. ;:!'éèàç]{3,25}$/;
    var regNumber = /^[0-9]{1,5}$/;
    var regId = /^[a-zA-Z0-9]{1,}$/;
    if(regName.test(name.value))
    {
        para1.style.display = "none";
        name.style.boxShadow = "none";
    }
    else{
        name.style.boxShadow = "4px 4px 6px red";
        bool = false;
        num = num + bool;
    }

    if(regText.test(description.value))
    {
        para1.style.display = "none";
        description.style.boxShadow = "none";
    }
    else{
        para1.style.display = "block";
        description.style.boxShadow = "4px 4px 6px red";
        bool = false;
    }

    if(regNumber.test(pages.value))
    {
        para1.style.display = "none";
        pages.style.boxShadow = "none";
    }
    else{
        para1.style.display = "block";
        pages.style.boxShadow = "4px 4px 6px red";
        bool = false;
    }


    if(regId.test(number.value))
    {
        para1.style.display = "none";
        number.style.boxShadow = "none";
    }
    else{
        para1.style.display = "block";
        number.style.boxShadow = "4px 4px 6px red";
        bool = false;
    }

    if(category.options[category.selectedIndex].innerHTML == "Category")
    {
        para1.style.display = "block";
        category.style.boxShadow = "4px 4px 6px red";
        bool = false;
    }
    else
    {
        category.style.boxShadow = "4px 4px 6px none";
    } 
    return bool;
}

var table = document.getElementById("table");
var number = document.getElementById("number");
var nam = document.getElementById("name");
var description = document.getElementById("description");
var pages = document.getElementById("pages");
var category = document.getElementById("category");
// buttons
var add = document.getElementById("button");
var but = document.getElementById("mybutton");
var del = document.querySelector(".but");

add.addEventListener("click",function()
{
   if(verif(nam,description,pages,number,category))
   {
       var tr = document.createElement('tr');
       var td0 = document.createElement('td');
       var td1 = document.createElement('td');
       var td2 = document.createElement('td');
       var td3 = document.createElement('td');
       var td4 = document.createElement('td');
       var td5 = document.createElement('input');

       td1.innerHTML = nam.value;
       td0.innerHTML = number.value;
       td0.id = "id";
       td2.innerHTML = description.value;
       td3.innerHTML = pages.value;
       td4.innerHTML = category.options[category.selectedIndex].innerHTML;
       td5.type= "button";
       td5.value = "Delete";
       
       nam.value = "";
       number.value = "";
       description.value = "";
       pages.value = "";

       td5.addEventListener("click",function(){
        var parentTr = td5.parentNode;
        parentTr.style.display = "none";
       });

       
      

       table.appendChild(tr);
       tr.appendChild(td0);
       tr.appendChild(td1);
       tr.appendChild(td2);
       tr.appendChild(td3);
       tr.appendChild(td4);
       tr.appendChild(td5);
       tr.appendChild(td6);
   }
   
});

del.addEventListener("click",function()
{
    var Idel = setInterval(function(){

    var tds = document.getElementsByTagName("td");
    for(var i=0,c=tds.length;i<c;i++)
  {
    for(var i=0,c=tds.length;i<c;i++)
    {
        tds[i].parentNode.style.display = "none";
        tds[i].parentNode.removeChild(tds[i]);
    }
    clearInterval(Idel);
  }
   },000);

});

but.addEventListener("click",function(){
    var parentTr = but.parentNode;
    parentTr = parentTr.parentNode;
    parentTr.style.display = "none";
   });