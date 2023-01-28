var SubjectClass = /** @class */ (function () {
    function SubjectClass() {
        this.registerAlters = [];
    }
    SubjectClass.prototype.registerAlter = function (observer) {
        this.registerAlters.push(observer);
    };
    SubjectClass.prototype.removeAlert = function (observer) {
        this.registerAlters.splice(this.registerAlters.indexOf(observer), 1);
    };
    SubjectClass.prototype.notifyAlert = function (message) {
        this.registerAlters.forEach(function (obs) { return obs.update("".concat(message)); });
    };
    return SubjectClass;
}());
var FireAlert = /** @class */ (function () {
    function FireAlert() {
    }
    FireAlert.prototype.update = function (observerMessage) {
        console.log("Fire Alter ".concat(observerMessage));
    };
    return FireAlert;
}());
var EarthquakeAlter = /** @class */ (function () {
    function EarthquakeAlter() {
    }
    EarthquakeAlter.prototype.update = function (observerMessage) {
        console.log("Earthquake Alert ".concat(observerMessage));
    };
    return EarthquakeAlter;
}());
var subject = new SubjectClass();
var fire = new FireAlert();
var earthquake = new EarthquakeAlter();
subject.registerAlter(fire);
subject.registerAlter(earthquake);
subject.notifyAlert('Sehdev Run ');
subject.notifyAlert('Sehdev Run ');
subject.notifyAlert('Sehdev Run ');
