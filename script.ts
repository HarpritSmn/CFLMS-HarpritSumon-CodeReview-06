class loc {
	city = "";
	address = "";
	zip = "";
	
	// teaserimg = "";

	constructor(city,zip,address) {
		this.city = city;
		this.address = address;
		this.zip = zip;
		// this.teaserimg = teaserimg;
	}

	display(){
		console.log("The name of the City is " + this.city + " and the Adress is " + this.address,this.zip);

		var infoCity : Array<string> =["Vienna","Vienna"];
		var infoAddress: Array<string> =["Karlsplatz 01","Maxingstraße 13b"];
		var infoZip:Array<number> =[1010,1130];
 

		for (let i = 0; i < infoCity.length; i++){
			var get = document.getElementById("one");
			var inhalt = `
			<span>
			<p>Citiy:${infoCity[i]} </p>
			<p>Adress:${infoAddress[i]} </p>
			<p>Zip:${infoZip[i]} </p>
			</span>` + get.append(inhalt);
		}

	}
}

let myCity = new loc("Vienna","Karlsplatz 1","1010");
myCity.display();


// ++++++++++++++++++++++++++++++ class Restarant ++++++++++++++++++++++++++++++


class restaurant extends loc {
	telNumber = "";
	cruisine = "";
	webAddress = "";

	constructor(city,zip,address,teaserimg,telNumber,cruisine,webAddress){
		super(city,zip,address);
		this.telNumber = telNumber;
		this.cruisine = cruisine;
		this.webAddress = webAddress;
	}
}


// ++++++++++++++++++++++++++++++ class event ++++++++++++++++++++++++++++++

class events extends loc{
	eventDate = "";
	eventTime = "";
	price = "";

	constructor(city,zip,address,teaserimg,telNumber,cruisine,webAddress,eventDate,eventTime,price){
		super(city,zip,address);
		this.eventDate = eventDate;
		this.eventTime = eventTime;
		this.price = price;
	}

}