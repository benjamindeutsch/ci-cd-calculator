import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  operand1: number = 0;
  operand2: number = 0;
  operator: string = '+';
  result: number = 0;

  onButtonClick(){
    try{
      this.result = this.calculate(this.operand1,this.operand2,this.operator);
    }catch(error){
      console.log(error);
    }
  }

  calculate(operand1:number, operand2: number, operator: string){
    const operators: {[key:string]: (o1: number, o2: number) => number} = {
      '+': (o1: number, o2: number) => o1 + o2,
      '-': (o1: number, o2: number) => o1 - o2,
      '*': (o1: number, o2: number) => o1 * o2,
      '/': (o1: number, o2: number) => o1 / o2,
    }

    if(operators[operator] != undefined){
      return operators[operator](operand1,operand2);
    }else{
      throw new Error("Operator not defined");
    }
  }
}
