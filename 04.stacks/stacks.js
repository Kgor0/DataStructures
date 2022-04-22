function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
   }
   function push(element) {
    this.dataStore[this.top++] = element;
   }
   function pop() {
    return this.dataStore[--this.top];
   }
   function peek() {
    return this.dataStore[this.top-1];
   }
   function length() {
    return this.top;
   }
   function clear() {
    this.top = 0;
   }
   function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
   }
   this.top = 0;
   this.push = push;
   this.pop = pop;
   this.peek = peek;
   this.clear = clear;
   this.length = length;
  
  var s = new Stack();
  s.push("David");
  s.push("Raymond");
  s.push("Bryan");
  print("length: " + s.length());
  print(s.peek());
  var popped = s.pop();
  print("The popped element is: " + popped);
  print(s.peek());
  s.push("Cynthia");
  print(s.peek());
  s.clear();
  print("length: " + s.length());
  print(s.peek());
  s.push("Clayton");
  print(s.peek());

  function mulBase(num, base) {
    var s = new Stack();
    do {
    s.push(num % base);
    num = Math.floor(num /= base);
    } while (num > 0);
    var converted = "";
    while (s.length() > 0) {
    converted += s.pop();
}
return converted;
}

function isPalindrome(word) {
    var s = new Stack();
    for (var i = 0; i < word.length; ++i) {
    s.push(word[i]);
    }
    var rword = "";
    while (s.length() > 0) {
    rword += s.pop();
    }
    if (word == rword) {
    return true;
    }
    else {
        function isPalindrome(word) {
            var s = new Stack();
            for (var i = 0; i < word.length; ++i) {
            s.push(word[i]);
            }
            var rword = "";
            while (s.length() > 0) {
            rword += s.pop();
            }
            if (word == rword) {
            return true;
            }
            else {
                function factorial(n) 
                    if (n === 0) {
                    return 1;
                    }
                    else {
                    return n * factorial(n-1);
                    }
                }
            }
        }
    }