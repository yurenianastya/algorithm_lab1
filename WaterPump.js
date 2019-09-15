// class declaration
let WaterPump = class {

    constructor(waterVolume, manufacturer, powerConsumption) {
        this.waterVolume = waterVolume;
        this.manufacturer = manufacturer;
        this.powerConsumption = powerConsumption
    }

    get getWaterVolume() {
        return this.waterVolume;
    }

    get getManufacturer() {
        return this.manufacturer
    }

    get getPowerConsumption() {
        return this.powerConsumption
    }
};
let newPump = new WaterPump(150, "Wilo", 10);
let newPump1 = new WaterPump(750, "Bosch", 440);
let newPump2 = new WaterPump(940, "Siemens", 200);
let newPump3 = new WaterPump(100, "PumpFiction", 120);
let newPump4 = new WaterPump(850, "Vossche", 70);
let newPump5 = new WaterPump(259, "Sulzer", 240);
let newPump6 = new WaterPump(670, "Test", 230);
// declaring array for sorting func
let powerConsumptionArray = [];
let waterVolumeArray = [];

powerConsumptionArray.push(newPump.getPowerConsumption)
powerConsumptionArray.push(newPump1.getPowerConsumption)
powerConsumptionArray.push(newPump2.getPowerConsumption)
powerConsumptionArray.push(newPump3.getPowerConsumption)
powerConsumptionArray.push(newPump4.getPowerConsumption)
powerConsumptionArray.push(newPump5.getPowerConsumption)
powerConsumptionArray.push(newPump6.getPowerConsumption)

waterVolumeArray.push(newPump.getWaterVolume)
waterVolumeArray.push(newPump1.getWaterVolume)
waterVolumeArray.push(newPump2.getWaterVolume)
waterVolumeArray.push(newPump3.getWaterVolume)
waterVolumeArray.push(newPump4.getWaterVolume)
waterVolumeArray.push(newPump5.getWaterVolume)
waterVolumeArray.push(newPump6.getWaterVolume)
// arrays before sorting
console.log("Water Volume Nums: ", waterVolumeArray, waterVolumeArray.length)
console.log("Power Consumption Nums: ", powerConsumptionArray, powerConsumptionArray.length)

const { performance } = require('perf_hooks');

swap_num = 0;
comparing_num = 0;

function insertionSortByConsumption(powerConsumptionArray) {
    var start = performance.now()
    console.log("The insertion sort by power consumption")
    

    for (let i = 1; i < powerConsumptionArray.length; i++) {

        let key = powerConsumptionArray[i];
        let check_num = i - 1;

        while (check_num >= 0 && powerConsumptionArray[check_num] > key) {
            powerConsumptionArray[check_num + 1] = powerConsumptionArray[check_num];
            check_num = check_num - 1;
            comparing_num++;
        }
        powerConsumptionArray[check_num + 1] = key;
        swap_num++;

    }
    console.log("Comparing: ", comparing_num);
    console.log("Swapping: ", swap_num);
    var end = performance.now()
    console.log("Took", (end - start).toFixed(4), "miliseconds")
    return console.log(powerConsumptionArray);
}

swap_count = 0;
compare_count = 0;
function pivot(waterVolumeArray, start = 0) {
    function swap(waterVolumeArray, i, j) {
        let temp = waterVolumeArray[i];
        waterVolumeArray[i] = waterVolumeArray[j];
        waterVolumeArray[j] = temp;
    }

    let pivot = waterVolumeArray[start];
    let swap_index = start;

    for (let i = start + 1; i < waterVolumeArray.length; i++) {
        compare_count++;
        if (pivot > waterVolumeArray[i]) {
            swap_index++;
            swap_count++
            swap(waterVolumeArray, swap_index, i)
        }
    }
    swap_count++;
    swap(waterVolumeArray, start, swap_index)
    return swap_index;

}

function quickSortByWaterVolume(waterVolumeArray, left = 0, right = waterVolumeArray.length - 1) {
    if (left < right) {
        compare_count++;
        let pivot_index = pivot(waterVolumeArray, left, right)
        //left side
        quickSortByWaterVolume(waterVolumeArray, left, pivot_index - 1);
        //right side
        quickSortByWaterVolume(waterVolumeArray, pivot_index + 1, right);
    }
    return waterVolumeArray;
}

insertionSortByConsumption(powerConsumptionArray);
var start = performance.now()
console.log("The quick sort by water volume")
quickSortByWaterVolume(waterVolumeArray);
console.log("Comparing: ", compare_count);
console.log("Swapping: ", swap_count);
var end = performance.now()
console.log("Took", (end - start).toFixed(4), "miliseconds")
console.log(waterVolumeArray);