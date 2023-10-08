import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicios',
  templateUrl: './exercicios.component.html',
  styleUrls: ['./exercicios.component.sass']
})
export class ExerciciosComponent {
  frase = 'Olá, mundo!'
  bgColor = 'white'
  fontColor = 'black'
  link = 'https://globo.com'

  varTexto='none'

  mudaCor(){
    if(this.bgColor=='white' && this.fontColor=='black'){
      this.bgColor = 'lightgreen'
      this.fontColor = 'blue'  
    } else {
      this.bgColor = 'white'
      this.fontColor = 'black'
    }
  }

  setDisplaytoOpt(val:string){
    this.varTexto = val
  }
}
