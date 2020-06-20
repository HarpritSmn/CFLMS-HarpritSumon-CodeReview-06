var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var loc = /** @class */ (function () {
    // teaserimg = "";
    function loc(city, zip, address) {
        this.city = "";
        this.address = "";
        this.zip = "";
        this.city = city;
        this.address = address;
        this.zip = zip;
        // this.teaserimg = teaserimg;
    }
    loc.prototype.display = function () {
        console.log("The name of the City is " + this.city + " and the Adress is " + this.address, this.zip);
        var infoCity = ["Vienna", "Vienna"];
        var infoAddress = ["Karlsplatz 01", "Maxingstraße 13b"];
        var infoZip = [1010, 1130];
        for (var i = 0; i < infoCity.length; i++) {
            var get = document.getElementById("one");
            var inhalt = "\n\t\t\t<span>\n\t\t\t<p>Citiy:" + infoCity[i] + " </p>\n\t\t\t<p>Adress:" + infoAddress[i] + " </p>\n\t\t\t<p>Zip:" + infoZip[i] + " </p>\n\t\t\t</span>" + get.append(inhalt);
        }
    };
    return loc;
}());
var myCity = new loc("Vienna", "Karlsplatz 1", "1010");
myCity.display();
// ++++++++++++++++++++++++++++++ class Restarant ++++++++++++++++++++++++++++++
var restaurant = /** @class */ (function (_super) {
    __extends(restaurant, _super);
    function restaurant(city, zip, address, teaserimg, telNumber, cruisine, webAddress) {
        var _this = _super.call(this, city, zip, address) || this;
        _this.telNumber = "";
        _this.cruisine = "";
        _this.webAddress = "";
        _this.telNumber = telNumber;
        _this.cruisine = cruisine;
        _this.webAddress = webAddress;
        return _this;
    }
    return restaurant;
}(loc));
// ++++++++++++++++++++++++++++++ class event ++++++++++++++++++++++++++++++
var events = /** @class */ (function (_super) {
    __extends(events, _super);
    function events(city, zip, address, teaserimg, telNumber, cruisine, webAddress, eventDate, eventTime, price) {
        var _this = _super.call(this, city, zip, address) || this;
        _this.eventDate = "";
        _this.eventTime = "";
        _this.price = "";
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.price = price;
        return _this;
    }
    return events;
}(loc));
