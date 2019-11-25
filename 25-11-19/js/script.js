var userOne = {
    email: "ryu@ninjas.com",
    name: "Ryu",
    login() {
        console.log(this.email, "has logged in");
    },
    logout() {
        console.log(this.email, 'has logged out');
    }
};

var car = {
    color: "YELLOW",
    maxSpeed: "120km/h",
    present() {
        console.log("the " + this.color + " car is driving at " + this.maxSpeed);
    }
}

car.present();