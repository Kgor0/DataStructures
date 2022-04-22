//Question 1
function studentGrades() {
    this.gradeList = [];
    this.add = add;
    this.average = average;
   }

   function add(grades) {
    this.gradeList.push(grades);
   }
  
   function average() {
    var total = 0;
    for (var i = 0; i < this.gradeList.length; ++i) {
    total += this.gradeList[i];
    }
    return total / this.gradeList.length;
   }
   
   var student = new studentGrades();
student.add(89);
student.add(77);
student.add(78);
student.add(76);
student.add(82);
student.add(82);
student.add(81);
student.add(91);
console.log(student.average()); //Answer = 82;

//Question 2
function concat(accumulatedString, item) {
    return accumulatedString + item;
   }
   var words = ["the ", "quick ","brown ", "fox "];
var sentence = words.reduce(concat);
print(sentence); // displays "the quick brown fox"

function concat(accumulatedString, item) {
    return accumulatedString + item;
   }
   var words = ["the ", "quick ","brown ", "fox "];
   var sentence = words.reduceRight(concat);
   print(sentence); // displays "fox brown quick the"

   //Question 3
function weekTemps() {
    this.dataStore = [];
    this.add = add;
    this.average = average;
   }
   function add(temp) {
    this.dataStore.push(temp);
   }
   function average() {
    var total = 0;
    for (var i = 0; i < this.dataStore.length; ++i) {
    total += this.dataStore[i];
    }
    return total / this.dataStore.length;
   }
   var week1 = new weekTemps();
   var week2 = new weekTemps();
   var week3 = new weekTemps();
   var week4 = new weekTemps();
   for(var i = 0; i < 8; i++){
    myRandom = Math.floor(Math.random() * 36);
    week1.add(myRandom);
}

for(var i = 0; i < 8; i++){
    myRandom = Math.floor(Math.random() * 36);
    week2.add(myRandom);
}

for(var i = 0; i < 8; i++){
    myRandom = Math.floor(Math.random() * 36);
    week3.add(myRandom);
}

for(var i = 0; i < 8; i++){
    myRandom = Math.floor(Math.random() * 36);
    week4.add(myRandom);
}

var monthTemp = [week1.dataStore, week2.dataStore, week3.dataStore, week4.dataStore];

monthTemp;

week1.average();
week2.average();
week3.average();
week4.average();         
   