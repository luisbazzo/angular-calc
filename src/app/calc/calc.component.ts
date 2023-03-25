import { style } from '@angular/animations';
import { HtmlParser } from '@angular/compiler';
import { Component } from '@angular/core';
import { noop } from 'rxjs';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
  //Atributos da classe/componente
  num1 : number = 0;
  num2 : number = 0;
  resp : number = 0;

  somar(){
    this.resp = this.num1 + this.num2;
  }

  subtrair(){
    this.resp = this.num1 - this.num2;
  }

  multiplicar(){
    this.resp = this.num1 * this.num2;
  }

  dividir(){
    this.resp = this.num1 / this.num2;
  }

  restodiv(){
    this.resp = this.num1 % this.num2;
  }

  limpar(){
    this.num1 = 0;
    this.num2 = 0;
    this.resp = 0;
    let listaOp = document.getElementById("listaOp") as HTMLElement;
    let btnNada = document.getElementById("btnNada") as HTMLElement;
    let btnSomar = document.getElementById("btnSomar") as HTMLElement;
    let btnSubtrair = document.getElementById("btnSubtrair") as HTMLElement;
    let btnMultiplicar = document.getElementById("btnMultiplicar") as HTMLElement;
    let btnDividir = document.getElementById("btnDividir") as HTMLElement;
    let btnRestoDiv = document.getElementById("btnRestoDiv") as HTMLElement;
    
    listaOp.style.display = "none";
    btnDividir.style.display = "none";
    btnMultiplicar.style.display = "none";
    btnRestoDiv.style.display = "none";
    btnSomar.style.display = "none";
    btnSubtrair.style.display = "none";
    btnNada.style.borderRadius = "40px";
    btnNada.style.display = "inline-block";
    
  }

  mostrarOperacao(){
    let listaOp = document.getElementById("listaOp") as HTMLElement;
    let btnNada = document.getElementById("btnNada") as HTMLElement;
    let btnSomar = document.getElementById("btnSomar") as HTMLElement;
    let btnSubtrair = document.getElementById("btnSubtrair") as HTMLElement;
    let btnMultiplicar = document.getElementById("btnMultiplicar") as HTMLElement;
    let btnDividir = document.getElementById("btnDividir") as HTMLElement;
    let btnRestoDiv = document.getElementById("btnRestoDiv") as HTMLElement;

    listaOp.style.display = "block";
    btnNada.style.borderBottom = "2px solid black";
    btnNada.style.borderRadius = "0";
    btnNada.style.display = "inline-block";
    btnDividir.style.display = "none";
    btnMultiplicar.style.display = "none";
    btnRestoDiv.style.display = "none";
    btnSomar.style.display = "none";
    btnSubtrair.style.display = "none";
  }

  selecionarOperacao(op : string){
    let listaOp = document.getElementById("listaOp") as HTMLElement;
    let btnNada = document.getElementById("btnNada") as HTMLElement;
    let btnSomar = document.getElementById("btnSomar") as HTMLElement;
    let btnSubtrair = document.getElementById("btnSubtrair") as HTMLElement;
    let btnMultiplicar = document.getElementById("btnMultiplicar") as HTMLElement;
    let btnDividir = document.getElementById("btnDividir") as HTMLElement;
    let btnRestoDiv = document.getElementById("btnRestoDiv") as HTMLElement;

    btnNada.style.display = "none";

    if(op == "Somar"){
      btnSomar.style.display = "inline-block";
    }
    else if(op == "Subtrair"){
      btnSubtrair.style.display = "inline-block";
    }
    else if(op == "Multiplicar"){
      btnMultiplicar.style.display = "inline-block";
    }
    else if(op == "Dividir"){
      btnDividir.style.display = "inline-block";
    }
    else{
      btnRestoDiv.style.display = "inline-block";
    }

    listaOp.style.display = "none";
  }

}
