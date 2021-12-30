
class Counter{
    constructor(count){
        this._counter=0;
        this._count = count;
    }
   inc(){
       this._counter++;
       this._count.innerText = this._counter;
   }
   dec() {
    this._counter--;
    this._count.innerText = this._counter;
   }
   reset (){
    this._counter=0;
    this._count.innerText = this._counter;
   }
}
function click(btnId) {
    let btn = document.querySelector(btnId);
    let counter = new Counter(btn);
    let increese = counter.inc.bind(counter);
    btn.addEventListener('click', increese);
    let dencreese = counter.dec.bind(counter);
    btn.addEventListener('keydown', dencreese);
    let reset = counter.reset.bind(counter);
    btn.addEventListener('wheel', reset);
}
click("#btn1");
click("#btn2");
click("#btn3");