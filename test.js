let temp = { a: 10, b: 20, sum() { return this.a + this.b },
multi: () => { 
    console.log(this.b)
    return this.a + this.b 
} }
console.log(temp.multi())