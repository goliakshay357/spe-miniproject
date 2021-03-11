import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  constructor() { }
  answer:any;

  ngOnInit(): void {
  }

  calculate(){
    //Getting the number
    let temp:any = document.getElementById("number");
    let number = parseInt(temp.value);
    console.log(typeof number);

    //Getting the selector
    let e:any = document.getElementById("sel1");
    let selectValue = e.value;
    console.log(selectValue);
   
    // Sqrt
    if(selectValue === "1"){
       this.answer=Math.sqrt(number); 
    }

    // Factorial
    if(selectValue === "2"){
      this.answer= this.sFact(number); 
    }
    
    // Natural Logerithm
    if(selectValue === "3"){
      this.answer= Math.log(number); 
    }
    
    // Power function
    if(selectValue === "4"){
      this.answer= Math.pow(number, 3); 
    }
    
  }

  sFact(num:number)
  {
    var rval=1;
    for (var i = 2; i <= num; i++)
        rval = rval * i;
    return rval;
  }
}
