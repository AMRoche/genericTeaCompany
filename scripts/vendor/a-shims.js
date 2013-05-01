// indexOf not present in i.e.8 and hence here's a function to do it.
// replaced Object.defineProperty(obj, prop, descriptor) in box2dweb with obj.prop = descriptor ; 

Array.prototype.indexOf = function(obj, start) {
     for (var i = (start || 0), j = this.length; i < j; i++) {
         if (this[i] === obj) { return i; }
     }
     return -1;
}
