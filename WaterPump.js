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

let objects_array = [
    newPump,
    newPump1,
    newPump2,
    newPump3,
    newPump4,
    newPump5,
    newPump6
]

console.log("Objects list: ", objects_array, "List length is: ", objects_array.length)

const { performance } = require('perf_hooks');

insertion_swaps = 0;
insertion_comparisons = 0;

function insertionSortByConsumption(objects_array) {
    for (let i = 1; i < objects_array.length; i++) {

        let key = objects_array[i].powerConsumption;
        let check_num = i - 1;

        while (check_num >= 0 && objects_array[check_num].powerConsumption > key) {
            objects_array[check_num + 1].powerConsumption = objects_array[check_num].powerConsumption;
            check_num = check_num - 1;
            insertion_comparisons++;
        }
        objects_array[check_num + 1].powerConsumption = key;
        insertion_swaps++;
    }
    return objects_array;
}

quicksort_swaps = 0;
quicksort_comparisons = 0;
function pivot(objects_array, start = 0) {
    function swap(objects_array, i, j) {
        let temp = objects_array[i].waterVolume;
        objects_array[i].waterVolume = objects_array[j].waterVolume;
        objects_array[j].waterVolume = temp;
    }

    let pivot = objects_array[start].waterVolume;
    let swap_index = start;

    for (let i = start + 1; i < objects_array.length; i++) {
        quicksort_comparisons++;
        if (pivot > objects_array[i].waterVolume) {
            swap_index++;
            quicksort_swaps++
            swap(objects_array, swap_index, i)
        }
    }
    quicksort_swaps++;
    swap(objects_array, start, swap_index)
    return swap_index;

}

function quickSortByWaterVolume(objects_array, left = 0, right = objects_array.length - 1) {
    if (left < right) {
        quicksort_comparisons++;
        let pivot_index = pivot(objects_array, left, right)
        //left side
        quickSortByWaterVolume(objects_array, left, pivot_index - 1);
        //right side
        quickSortByWaterVolume(objects_array, pivot_index + 1, right);
    }
    return objects_array;
}


console.log("The insertion sort by power consumption")
var start = performance.now()
insertionSortByConsumption(objects_array);
var end = performance.now()
console.log("Comparing: ", insertion_comparisons);
console.log("Swapping: ", insertion_swaps);
console.log("Took", (end - start).toFixed(4), "miliseconds")
console.log(objects_array)

console.log("The quick sort by water volume")
var start = performance.now()
quickSortByWaterVolume(objects_array);
var end = performance.now()
console.log("Comparing: ", quicksort_comparisons);
console.log("Swapping: ", quicksort_swaps);
console.log("Took", (end - start).toFixed(4), "miliseconds")
console.log(objects_array);