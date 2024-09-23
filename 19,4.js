function ElectricDevice(name, powerConsuption) {
    this.name = name,
    this.PowerWt = powerConsuption,
    this.power = false
}

ElectricDevice.prototype.enable = function(name) {
    this.power = true;
    console.log('${this.name} включен в розетку')
}

ElectricDevice.prototype.disable = function(name) {
    this.power = false;
    console.log('${this.name} выключен из розетки')
}

ElectricDevice.prototype.getPower = function(){
    console.log('Потребляемая мощность ${this.PowerWt} Вт')
}

function Phone(name, powerConsuption, material){
    this.name = name,
    this.PowerWt = powerConsuption,
    this.material = material
}

Phone.prototype = new ElectricDevice()

function Computer(name, powerConsuption, system){
    this.name = name,
    this.PowerWt = powerConsuption,
    this.system = system
}

Computer.prototype = new ElectricDevice()

Computer.prototype.computerSystem = function(){
    console.log('на компьютере установлена ОС ${this.system}')
}

const phone = new Phone('телефон', 10, "пластик")
const computer = new Computer('компьютер', 150, "Mac OS")

phone.disable()
phone.getPower()
console.log(phone)
console.log(computer)
computer.computerSystem()