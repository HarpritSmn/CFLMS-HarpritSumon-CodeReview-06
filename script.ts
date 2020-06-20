class loc {
	city = "";
	zip = "";
	address = "";
	teaserimg = "";

	constructor(city,zip,address,teaserimg) {
		this.city = city;
		this.zip = zip;
		this.address = address;
		this.teaserimg = teaserimg;
	}

	display(){
		return `City: ${this.city} ZIP: ${this.zip} Address: ${this.address} TeaserImg: ${this.teaserimg}`
	}
}

document.getElementById("one").innerHTML = "display()";


var fullInformation = new loc("Vienna","1100","Troststraße","bild");
console.log(fullInformation.display());

// ++++++++++++++++++++++++++++++ class Restarant ++++++++++++++++++++++++++++++


class restaurant extends loc {
	telNumber = "";
	cruisine = "";
	webAddress = "";

	constructor(city,zip,address,teaserimg,telNumber,cruisine,webAddress){
		super(city,zip,address,teaserimg);
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
		super(city,zip,address,teaserimg);
		this.eventDate = eventDate;
		this.eventTime = eventTime;
		this.price = price;
	}

}