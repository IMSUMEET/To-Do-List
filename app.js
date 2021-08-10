const express = require("express");
const bodyParser = require("body-parser");

const date = require(__dirname + "/date.js");

app = express();

const items = ["Buy Food" , "Cook Food" , "Eat Food"];

const workList = []; 

app.set("view engine" , "ejs");

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(express.static("public"));


// Getrequeset
app.get("/" , function(req , res) {
	const day = date.getDate();
	res.render("list" , {listTitle : day, newListItem: items});
})



// Post Request
app.post("/" ,function(req, res) {

	// console.log(req.body);

	item = req.body.newItem;
	if(item === ""){
		console.log("Enter Valid Data");
	}
	else{
		if(req.body.list === "Work List"){
			workList.push(item);
			res.redirect("/work");
		} else{
			items.push(item);
			res.redirect("/");
		}
		
		// console.log(items);
	}
})


app.get("/work", function(req, res) {
	res.render("list", {listTitle: "Work List" , newListItem: workList});
});




app.listen(process.env.POST || 3000 , function() {
	console.log("Server is listening ");
})