
class qeustion  {
    constructor(code, qText, aText,number,score){
        this.code=code;
        this.qText=qText;
        this.aText=aText;
        this.number=number;
        this.score=score;
    }
    get anumber(){
        return this.number;
    }
    isAnswered(){
       if(this.aText===" ")
            return 0;
            else
            return 1;
    }
    getScore(){
        if(this.isAnswered()===0)
        return '-'+this.score;
        else 
        return this.score; 
    }
};
let qeustion1=new qeustion(1111,"aaaa"," hghg",1,'33%');
let qeustion2=new qeustion(1112,"bbbb"," ",3,'33%');
let qeustion3=new qeustion(1113,"cccc"," jujuju",2,'33%');
class test{
    constructor(code,qList, sName,time){
        this.code=code;
        this.qList=qList;
        this.sName=null;
        this.textStart=null;
        this.time=time;
    }
    startTest(Name){
        this.sName=Name;
        this.textStart=new Date().getMinutes();
        return this.textStart;
        
    }
    getOrderredQuestions(){
        for(let i=0;i<this.qList.length;i++){
            let temp=this.qList[i];
            let j=i-1;
            while(j>=0&&this.qList[j].number>temp.number){
                this.qList[j+1]=this.qList[j];
                j=j-1;
            }
            this.qList[j+1]=temp;
    }
    return this.qList;
}
}

const test1=new test(1,[qeustion1,qeustion2,qeustion3],"tamar",40);
// console.log(this.startTest("tamar"));
 class answer{
    constructor(code,text){
        this.code=code;
        this.text=text;
    }
 }
 class AmericanQeustion extends qeustion{
    constructor(code, qText,aText,number,score,answersList,correctAnswerId){
   super(code, qText,aText,number,score);
   this.answersList=answersList;
   this.correctAnswerId=correctAnswerId;
   }
   isAnswered(){
    if(this.aText===this.correctAnswerId)
         return 1;
         else
         return 0;
 }
 }
//  const d=new AmericanQeustion(1,1,4,1,'20%',2,4)
class YesNo extends qeustion{
    constructor(code, qText,aText,number,score,correctAnswer){
        super(code, qText,aText,number,score);
        this.correctAnswer=correctAnswer;
    }
    isAnswered(){
        if(this.aText===this.correctAnswer)
             return 1;
             else
             return 0;
     }
}
//  const e=new YesNo(1,1,true,1,'20%',true)