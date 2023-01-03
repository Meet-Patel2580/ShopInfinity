var count=0; 
//Customer Information (first name)
function Information1(fName){
	var firstName = document.getElementById(fName).value;
	document.getElementById('FN').innerHTML = firstName;
}
//Customer Information (last name)
function Information2(lName){
	var lastName = document.getElementById(lName).value;
	document.getElementById('LN').innerHTML = lastName;
}
//Customer Information (phone number)
function Information3(pNumber){
	var phoneNumber = document.getElementById(pNumber).value;
	document.getElementById('PN').innerHTML = phoneNumber;
}
//Customer Information (address)
function Information4(adress){
	var adress = document.getElementById(adress).value;
	document.getElementById('ad').innerHTML = adress;
}

var answer=+prompt("Guess the lucky number of the day to reccive a free Raptors Hat, you have 3 chances")
var num = (Math.random())*10;
var number = 1;
if(answer==num){
	alert("congratulations");
}
else{
do {
	number++;
 var answer=+ prompt("sorry wrong answer, try again");
 if(answer==num) {
	 alert("congratulations")
 }
} while (answer != num && number<3)
}

//electronics cart
var electronicsCost=0;
var item1="iphone XR"
var item2="iphone XS"
var item3="S10"
var item4="LG 4K smart TV"
var item5="Sony Bravia"
var item6="Samsung OLED TV"
var item7="Apple Mac"
var item8="Macbook Pro"
var item9="Cyber Power PC"
function confirm(){
	if(document.getElementById("XR").checked== true){
	document.getElementById('item1').innerHTML = item1;
	electronicsCost+= 1000;
	}
	else{
		item1=" "
	}
	if(document.getElementById("XS").checked == true){
		electronicsCost+= 1400;
		document.getElementById('item2').innerHTML = item2;
		}
	else{
		item2=" "
		}
	if(document.getElementById("S10").checked == true){
		electronicsCost+= 1200;
		document.getElementById('item3').innerHTML = item3;
		}
		else{
			item3=" "
		}
	if(document.getElementById("LG").checked == true){
		electronicsCost+= 800;
		document.getElementById('item4').innerHTML = item4;
		}
		else{
			item4=" "
		}
	if(document.getElementById("Sony").checked == true){
		electronicsCost+= 900;
		document.getElementById('item5').innerHTML = item5;
		}
		else{
			item5=" "
		}
	if(document.getElementById("Samsung").checked == true){
		electronicsCost+= 780;
		document.getElementById('item6').innerHTML = item6;
		}
		else{
			item6=" "
		}
	if(document.getElementById("Mac").checked == true){
		electronicsCost+=2000;
		document.getElementById('item7').innerHTML = item7;
		}
		else{
			item7=" "
		}
	if(document.getElementById("Macbook").checked == true){
		electronicsCost+= 800;
		document.getElementById('item8').innerHTML = item8;
		}
		else{
			item8=" "
		}
	if(document.getElementById("Cyber").checked == true){
		electronicsCost+= 1000;
		document.getElementById('item9').innerHTML = item9;
		}
		else{
			item9=" "
		}
	}


//clothes cart
var clothesCost=0;
var clothes1="Gucci t-shirt"
var clothes2="Supreme t-shirt"
var clothes3="George slim fit shirt"
var clothes4="Levi's Jeans"
var clothes5="Khakis"
var clothes6="Denim shorts"
var clothes7="Air Force 1 off white "
var clothes8="White Nike shoes"
var  clothes9="New Balance Kawhi Shoes"
function clothes(){
if(document.getElementById("a").checked== true){
document.getElementById('clothes1').innerHTML = clothes1;
clothesCost+= 75;
}
else{
clothes1=" "
}
if(document.getElementById("b").checked == true){
clothesCost+= 65;
document.getElementById('clothes2').innerHTML = clothes2;
}
else{
clothes2=" "
}
if(document.getElementById("c").checked == true){
	clothesCost+= 12;
document.getElementById('clothes3').innerHTML = clothes3;
}
else{
	clothes3=" "
}
if(document.getElementById("d").checked == true){
	clothesCost+= 35;
document.getElementById('clothes4').innerHTML = clothes4;
}
else{
clothes4=" "
}
if(document.getElementById("e").checked == true){
	clothesCost+= 28;
document.getElementById('clothes5').innerHTML = clothes5;
}
else{
	clothes5=" "
}
if(document.getElementById("f").checked == true){
	clothesCost+= 10.50;
document.getElementById('clothes6').innerHTML = clothes6;
}
else{
	clothes6=" "
}
if(document.getElementById("g").checked == true){
	clothesCost+=200;
document.getElementById('clothes7').innerHTML = clothes7;
}
else{
	clothes7=" "
}
if(document.getElementById("h").checked == true){
	clothesCost+= 175;
document.getElementById('clothes8').innerHTML = clothes8;
}
else{
	clothes8=" "
}
if(document.getElementById("i").checked == true){
	clothesCost+= 349.99;
document.getElementById('clothes9').innerHTML = clothes9;
}
else{
	clothes9=" "
}
}

//cars cart
var carsCost=0;
var car1="Toyota Corolla";
var car2="Honda Civic";
var car3="VolksWagen Jetta";
var car4="Toyota Rav4";
var car5="Honda CRV";
var car6="VolksWagen Tiguan";
var car7="Ford F150";
var car8="Chevy Silverado";
var car9="Toyota Tundra";
function cars(){
	if(document.getElementById("c1").checked== true){
		document.getElementById('car1').innerHTML = car1;
		carsCost+= 35000;
	}
	else{
		car1=" "
	}

	if(document.getElementById("c2").checked== true){
		document.getElementById('car2').innerHTML = car2;
		carsCost+= 32000;
	}
	else{
		car2=" "
	}

	if(document.getElementById("c3").checked== true){
		document.getElementById('car3').innerHTML = car3;
		carsCost+= 36500
	}
	else{
		car3=" "
	}

	if(document.getElementById("c4").checked== true){
		document.getElementById('car4').innerHTML = car4;
		carsCost+= 45000;
	}
	else{
		car4=" "
	}

	if(document.getElementById("c5").checked== true){
		document.getElementById('car5').innerHTML = car5;
		carsCost+= 43499;
	}
	else{
		car5=" "
	}

	if(document.getElementById("c6").checked== true){
		document.getElementById('car6').innerHTML = car6;
		carsCost+= 60000;
	}
	else{
		car6=" "
		alert("are you sure?")
	}

	if(document.getElementById("c7").checked== true){
		document.getElementById('car7').innerHTML = car7;
		carsCost+= 51000;
	}
	else{
		car7=" "
	}

	if(document.getElementById("c8").checked== true){
		document.getElementById('car8').innerHTML = car8;
		carsCost+= 39599;
	}
	else{
		car8=" "
	}

	if(document.getElementById("c9").checked== true){
		document.getElementById('car9').innerHTML = car9;
		carsCost+= 49999;
	}
	else{
		car9=" "
	}
		
}

//outdoors cart
var outdoorCost=0;
var out1="Electric Bike";
var out2="Blue Surly Bike";
var out3="Wide Tire Green Bike";
var out4="100 foot hose";
var out5="wagon";
var out6="water sprinkler";
var out7="Electric Lawn Mower";
var out8="Gas lawn Mower";
var out9="John Deere Lawn Mower";
function outdoors(){
	if(document.getElementById("o1").checked== true){
		document.getElementById('out1').innerHTML = out1;
		outdoorCost+= 620;
	}
	else{
		out1=" "
	}
	if(document.getElementById("o2").checked== true){
		document.getElementById('out2').innerHTML = out2;
		outdoorCost+= 140;
	}
	else{
		out2=" "
	}
	if(document.getElementById("o3").checked== true){
		document.getElementById('out3').innerHTML = out3;
		outdoorCost+= 200;
	}
	else{
		out3=" "
	}
	if(document.getElementById("o4").checked== true){
		document.getElementById('out4').innerHTML = out4;
		outdoorCost+= 25;
	}
	else{
		out4=" "
	}
	if(document.getElementById("o5").checked== true){
		document.getElementById('out5').innerHTML = out5;
		outdoorCost+= 17;
	}
	else{
		out5=" "
	}
	if(document.getElementById("o6").checked== true){
		document.getElementById('out6').innerHTML = out6;
		outdoorCost+= 8;
	}
	else{
		out6=" "
	}
	if(document.getElementById("o7").checked== true){
		document.getElementById('out7').innerHTML = out7;
		outdoorCost+= 375;
	}
	else{
		out7=" "
	}
	if(document.getElementById("o8").checked== true){
		document.getElementById('out8').innerHTML = out8;
		outdoorCost+= 300;
	}
	else{
		out8=" "
	}
	if(document.getElementById("o9").checked== true){
		document.getElementById('out9').innerHTML = out9;
		outdoorCost+= 1000;
	}
	else{
		out9=" "
	}
}


	// Total price of customers order
	function totalPrice(){
		
	var subtotal=0;
	var total=0;
	var subtotal= electronicsCost+clothesCost+carsCost+outdoorCost;
	if(subtotal>10000){
	subtotal-=100
	}
		var total = (subtotal*1.13);
		alert("your total price is $"+total.toFixed(2));
		document.getElementById("t").value= "$"+total.toFixed(2);
	} 

	// Greeting and payment confirmation for the purchase
	function greetings() {
		var greeting;
		var time = new Date().getHours();
		if (time < 10) {
			greeting = "Have a nice morning, you will recieve your order in about 1-2 business days";
		} else if (time < 15) {
			greeting = "Have a nice day, you will recieve your order in about 1-2 business days";
		} else if (time<20) {
			greeting = "Have a nice evening, you will recieve your order in about 1-2 business days";
		} else{
			greeting="Good Night,you will recieve your order in about 1-2 business days";
		}
document.getElementById("day").innerHTML = greeting;
}

