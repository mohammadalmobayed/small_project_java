var  menu=[

    {
        Foodtype:"burger zainger",
        Payment:40,
        orderimage: "./img/1.jfif",
        },
        {
            Foodtype:"zainger",
            Payment:20,
            orderimage: "./img/2.jfif",
            },
        {
            Foodtype:"zinger hot ",
            Payment:7,
            orderimage: "./img/3.jfif",
            },
]

function  medo()
{
	var x = document.getElementById("mnu");
    for (var i = 0; i < menu.length; i++) {
	x.options[x.options.length] = new Option(menu[i].Foodtype , menu[i].Payment);
    }
}

let  T =document.querySelector('table');
let  Oimg=document.querySelector('table');
let  C=document.querySelector('#customer');
let  F=document.querySelector('#mnu');

function ask() 
{
	let i=F.selectedIndex;
	let t1=menu[i].Foodtype;
	let t2= '<img src=' +  menu[i].orderimage + ">" ;
	let t3=menu[i].Payment;

	var table = document.getElementById("t");

var row = table.insertRow(table.length);

var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);

cell1.innerHTML = t2 ;
cell2.innerHTML = C.value;
cell3.innerHTML = t1;
cell4.innerHTML = t3;
}


function DTbl()
{
	var t = document.getElementById("t");
	var  L =t.rows.length;
	if(L!=1)
	{
        document.getElementById("t").deleteRow(L-1);
	}
}

let removeLocal=document.getElementById(`Remove`)
removeLocal.addEventListener(`click`,deleteLocal)

function deleteLocal(){
    localStorage.removeItem('array')
    document.getElementById("list").innerHTML = " "}