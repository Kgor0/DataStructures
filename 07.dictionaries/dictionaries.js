function Dictionary() {
    this.datastore = new Array();
   }
   
   undefined
   function add(key, value) {
    this.datastore[key] = value;
   }
   undefined
   function find(key) {
    return this.datastore[key];
   }
   undefined
   function remove(key) {
    delete this.datastore[key];
   }
   undefined
   function showAll() {
    for each (var key in Object.keys(this.datastore)) {
    console.log(key + " -> " + this.datastore[key]);
    }
   }
   function showAll() {
    this.datastore.forEach(var key in Object.keys(this.datastore)) {
    console.log(key + " -> " + this.datastore[key]);
    }
   }
   function showAll() {
    for(const key of Object.keys(this.datastoe)) {
    console.log(key + " -> " + this.datastore[key]);
    }
   }
   var pbook = new Dictionary();