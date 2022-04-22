function HashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.showDistro = showDistro;
    this.put = put;
    //this.get = get;
   }
   undefined
   function simpleHash(data) {
    var total = 0;
    for (var i = 0; i < data.length; ++i) {
    total += data.charCodeAt(i);
    }
    return total % this.table.length;
   }
   undefined
   function put(data) {
    var pos = this.simpleHash(data);
    this.table[pos] = data;
   }
   
   undefined
   function simpleHash(data) {
    var total = 0;
    for (var i = 0; i < data.length; ++i) {
    total += data.charCodeAt(i);
    }
    return total % this.table.length;
   }
   undefined
   function showDistro() {
    var n = 0;
    for (var i = 0; i < this.table.length; ++i) {
    if (this.table[i] != undefined) {
    console.log(i + ": " + this.table[i]);
    }
    }
   }
   undefined
   var someNames = ["David", "Jennifer", "Donnie", "Raymond",
    "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
   undefined
   var hTable = new HashTable
   undefined
   HashTable
   ƒ HashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.showDistro = showDistro;
    this.put = put;
    //this.get = get;
   }
   var hTable = new HashTable();
   for (var i = 0; i < someNames.length; ++i) {
    hTable.put(someNames[i]);
   }
   hTable.showDistro();
   VM1604:5 35: Cynthia
   VM1604:5 45: Clayton
   VM1604:5 57: Donnie
   VM1604:5 77: David
   VM1604:5 95: Danny
   VM1604:5 116: Mike
   VM1604:5 132: Jennifer
   VM1604:5 134: Jonathan

   function simpleHash(data) {
    var total = 0;
    for (var i = 0; i < data.length; ++i) {
    total += data.charCodeAt(i);
    }
    print("Hash value: " + data + " -> " + total);
    return total % this.table.length;
   }

var hTable = new HashTable();
for (var i = 0; i < someNames.length; ++i) {
 hTable.put(someNames[i]);
}
hTable.showDistro();

VM2127:5 12: Jennifer
VM2127:5 22: Raymond
VM2127:5 55: Donnie
VM2127:5 58: Clayton
VM2127:5 80: Jonathan
VM2127:5 82: Mike
VM2127:5 103: Cynthia
VM2127:5 110: Danny
undefined
function getRandomInt (min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

undefined
function genStuData(arr) {
 for (var i = 0; i < arr.length; ++i) {
 var num = "";
 for (var j = 1; j <= 9; ++j) {
 num += Math.floor(Math.random() * 10);
 }
 num += getRandomInt(50, 100);
 arr[i] = num;
 }
}
undefined
function getRandomInt (min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
undefined
function genStuData(arr) {
 for (var i = 0; i < arr.length; ++i) {
 var num = "";
 for (var j = 1; j <= 9; ++j) {
 num += Math.floor(Math.random() * 10);
 }
 num += getRandomInt(50,100);
 arr[i] = num;
 }
}
undefined
var numStudents = 10;
var arrSize = 97;
var idLen = 9;
var students = new Array(numStudents);
genStuData(students);
console.log ("Student data: \n");
for (var i = 0; i < students.length; ++i) {
 console.log(students[i].substring(0,8) + " " +
 students[i].substring(9));
}
VM2595:6 Student data: 

VM2595:8 94186522 68
VM2595:8 08139327 63
VM2595:8 82933925 97
VM2595:8 91334540 71
VM2595:8 85175850 92
VM2595:8 82908473 61
VM2595:8 55334173 85
VM2595:8 56849267 87
VM2595:8 72146289 88
VM2595:8 54045689 87
undefined
console.log("\n\nData distribution: \n");
var hTable = new HashTable();
for (var i = 0; i < students.length; ++i) {
 hTable.put(students[i]);
}
hTable.showDistro();
VM2639:1 

Data distribution: 

VM2127:5 2: 91334540671
VM2127:5 24: 54045689687
VM2127:5 54: 08139327363
VM2127:5 72: 85175850492
VM2127:5 82: 82908473661
VM2127:5 86: 56849267587
VM2127:5 99: 94186522068
VM2127:5 128: 72146289288
VM2127:5 134: 82933925397
undefined
var numStudents = 10;
var arrSize = 97;
var idLen = 9;
var students = new Array(numStudents);
genStuData(students);
console.log ("Student data: \n");
for (var i = 0; i < students.length; ++i) {
 console.log(students[i].substring(0,8) + " " +
 students[i].substring(9));
}
console.log("\n\nData distribution: \n");
var hTable = new HashTable();
for (var i = 0; i < students.length; ++i) {
 hTable.put(students[i]);
}
hTable.showDistro();

VM2764:6 Student data: 

VM2764:8 99340005 57
VM2764:8 25817481 78
VM2764:8 01329695 78
VM2764:8 48751927 71
VM2764:8 67323508 69
VM2764:8 40657277 72
VM2764:8 96333462 51
VM2764:8 45997861 61
VM2764:8 64264973 63
VM2764:8 85434914 88
VM2764:11 

Data distribution: 

VM2127:5 15: 64264973863
VM2127:5 20: 45997861861
VM2127:5 38: 67323508469
VM2127:5 50: 85434914588
VM2127:5 76: 48751927371
VM2127:5 94: 40657277172
VM2127:5 110: 01329695578
VM2127:5 117: 25817481378
VM2127:5 124: 96333462551
undefined
function put(key, data) {
 var pos = this.betterHash(key);
 this.table[pos] = data;
}

undefined
function get(key) {
 return this.table[this.betterHash(key)];
}