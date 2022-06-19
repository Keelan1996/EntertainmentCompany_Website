//3 arrays that holds all the ordered products/ produces codes
var shoppingCart = [];
var codes = ["Keelan", "Thady", "Liam"];


//manipulates DOM to display content of the shopping cart https://www.w3schools.com/js/js_examples.asp=============================================================
function displayShoppingCart() {
	var orderedMovies = document.getElementById("orderedMovies");
    var code = document.getElementById("code").value;



// delete all unwanted rows from ordered products table https://www.w3schools.com/js/js_examples.asp
while (orderedMovies.rows.length > 0) {
		orderedMovies.deleteRow(0);
	}// while


	//variable for the total price
	var totalPrice = 0;

	//array of objects https://www.w3schools.com/js/js_examples.asp
	for (var product in shoppingCart) {

		//new row
		var row = orderedMovies.insertRow();
        var discount = 1;
		//three cells for the products
		var cellTitle = row.insertCell(0);
		var cellDate = row.insertCell(1);
		var cellPrice = row.insertCell(2);
		cellPrice.align = "right";

		//fill cells with values from current product object of our array
		cellTitle.innerHTML = shoppingCart[product].Title;
		cellDate.innerHTML = shoppingCart[product].Date;
		cellPrice.innerHTML = shoppingCart[product].Price;

        totalPrice += shoppingCart[product].Price;

        for(i = 0; i < codes.length; i++)
        {
            if(code == codes[i])
            {
                totalPrice -= (totalPrice * 0.20);
            }//if
	    }//for

	    //fill total cost of our shopping cart
	    document.getElementById("totalPrice").innerHTML = "€" + totalPrice.toFixed(2);
    }// for
}//displayShopingcart ================================================================================================================================


// ordering code samples taken from https://www.w3schools.com/js/js_examples.asp ====================================================================
function Order(title, date, price) {
	// holds three properties:    Name, Description and Price
	var singleProduct = {};

	//Fill with info
	singleProduct.Title = title;
	singleProduct.Date = date;
	singleProduct.Price = price;

	//Add new product
	shoppingCart.push(singleProduct);

	//display
	displayShoppingCart();
}// ORDERS

function myOrder(){
	alert("Thank you for your order.");
	location.reload();
}//myOrder

function generateCode() {
    document.getElementById("GenerateCode").value = codes[Math.floor(Math.random() * codes.length)];
}// generateCode==========================================================================================================================================


// sign up code taken from https://www.w3schools.com/js/js_examples.asp ========================================================================================
function SignUp()
{
	var name = document.getElementById("newName").value;
	var email = document.getElementById("newEmail").value;
	var password = document.getElementById("newPassword").value;

	// Check browser support
	if (typeof(Storage) !== "undefined") {
		// Store
		//localStorage.setItem("index",0);
		localStorage.setItem("index",(parseInt(localStorage.getItem("index"))+1));
		localStorage.setItem("name"+localStorage.getItem("index"), name);
		localStorage.setItem("email"+localStorage.getItem("index"), email);
		localStorage.setItem("password"+localStorage.getItem("index"), password);

		alert("ACCOUNT CREATED!");
	}//if
	else {
		alert("Sorry, your browser does not support Web Storage...");
	}//else
}// SignUp

//login code taken from  https://www.w3schools.com/js/js_examples.asp ===============================================================================

function Login()
{
	var findEmail = document.getElementById("findEmail").value;
	var findPassword = document.getElementById("findPassword").value;
	var found = false;

	for (var i = 1; i <= localStorage.getItem("index"); i++) {
		if ((localStorage.getItem("email"+i) == findEmail) && (localStorage.getItem("password"+i) == findPassword) == true) {
			found = true;

			document.getElementById("name").innerHTML = "Name: " + localStorage.getItem("name"+i);
			document.getElementById("email").innerHTML = "Email: " + localStorage.getItem("email"+i);
			document.getElementById("password").innerHTML = "Password: " + localStorage.getItem("password"+i);
		} //if
	} //for

	if(found == true)
	{
		var login = document.getElementById("login");
		login.style.visibility = 'hidden';

		var signup = document.getElementById("signup");
		signup.style.visibility = 'hidden';

		var info = document.getElementById("info");
		info.style.visibility = 'visible';

		alert("Login Successfully");
	}	//	if
	else {
		alert("Input recieved");
	}// else
}// login