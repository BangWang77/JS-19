class ElectricDevice {
    constructor(name,powerConsumption){
    this.name = name
    this.PowerWt = powerConsumption
    this.power = falser;
}

enable(){
    this.power = true;
    console.log('${this.name} включено в розетку')
}

disable(){
    this.power = false;
    console.log('${this.name} вкл.чено в розетку')
}
getPower(){
    console.log('потребляемая мощность ${this.PowerWt} Вт')
}
}

class Phone extends ElectricDevice{
    constructor(name, powerConsumption, material) {
        super()
        this.name = name,
        this.PowerWt = powerConsumption,
        this.material = material
    }
}

class Computer extends ElectricDevice{
    constructor(name,powerConsumption, system){
        super()
        this.name = name,
        this.PowerWt = powerConsumption,
        this.system = system
    }
}

const phone = new Phone('телефон', 15, "пластик");
const computer = new Computer('компьютер', 150, "Windows");

phone.disable()
phone.getPower()
console.log(phone)
console.log(computer)
computer.computerSystem()