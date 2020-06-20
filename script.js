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
    function loc(city, zip, address, teaserimg) {
        this.city = "";
        this.zip = "";
        this.address = "";
        this.teaserimg = "";
        this.city = city;
        this.zip = zip;
        this.address = address;
        this.teaserimg = teaserimg;
    }
    loc.prototype.display = function () {
        return "City: " + this.city + " ZIP: " + this.zip + " Address: " + this.address + " TeaserImg: " + this.teaserimg;
    };
    return loc;
}());
document.getElementById("one").innerHTML = "display()";
var fullInformation = new loc("Vienna", "1100", "Troststraße", "bild");
console.log(fullInformation.display());
// ++++++++++++++++++++++++++++++ class Restarant ++++++++++++++++++++++++++++++
var restaurant = /** @class */ (function (_super) {
    __extends(restaurant, _super);
    function restaurant(city, zip, address, teaserimg, telNumber, cruisine, webAddress) {
        var _this = _super.call(this, city, zip, address, teaserimg) || this;
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
        var _this = _super.call(this, city, zip, address, teaserimg) || this;
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
