import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show:boolean = true
  nombre:string = ""
  vengadores:any[] = []
  frase:any[] = []
  idVengador:number = 0
  nombreVengador:string = "Ninguno"
  imgVengador:string = ""
  fraseVengador:string = "No Seleccionado"
  disabled:string = "disabled"
  acierto:string = ""
  n_aciertos:number = 0
  n_intentos:number = 5
  nuevoIntento:string = "disabled"
  color:string = "secondary"
  color2:string = "secondary"
  existeImg:string = ""

  constructor(){
    this.vengadores = [
      {
        id: 3,
        nombre: 'Iron Man', 
        frase: '"Traiganme a Thanos"',
        img: './assets/avengersImgs/iron-man.jpg'
      },
      {
        id: 5,
        nombre: 'Capitan America', 
        frase: '"Yo solo actuo como si en verdad supiera todo"',
        img: './assets/avengersImgs/capitan.jpg'
      },
      {
        id: 4,
        nombre: 'Thor', 
        frase: '"Ese es mi secreto capitan, siempre estoy enojado"',
        img: './assets/avengersImgs/thor.jpg'
      },
      {
        id: 1,
        nombre: 'Hulk', 
        frase: '"Yo soy Iron Man"',
        img: './assets/avengersImgs/hulk.jpg'
      },
      {
        id: 2,
        nombre: 'Black Widow', 
        frase: '"Podria hacer esto todo el dia"',
        img: './assets/avengersImgs/black-widow.jpg'
      }
    ]
  }
  bloquearAll(){
    this.nuevoIntento = "disabled"
    this.color = "secondary"
    this.color2 = "secondary"
    this.disabled = "disabled"
  }
  newIntento(){
    this.nuevoIntento = ""
    this.color = "dark"
    this.color2 = "secondary"
    this.disabled = "disabled"
    this.acierto = ""
    this.existeImg = ""
  }
  ocultar(){
    if(this.nombre.length > 0 && this.nombre.length >= 4){
      this.show = false
      console.log(this.nombre);
    }
    else{
      this.show = true
      alert("¡Debe Ingresar Nombre!")
    }
  }
  atras(){
    this.show = true
  }
  adivinar(idF:number, idV: number, frase:string){
    this.fraseVengador = frase
    this.bloquearAll()
    if(idF == idV){
      this.n_intentos = this.n_intentos - 1
      this.n_aciertos = this.n_aciertos + 1
      this.acierto = "true"
    }
    else{
      //no acertó
      this.acierto = "false"
      this.n_intentos = this.n_intentos - 1
    }
  }
  getVengador(idV:number, nombre:string, img:string){
    idV++
    this.disabled = ""
    this.existeImg = "true"
    this.idVengador = idV
    this.nombreVengador = nombre
    this.imgVengador = img
    console.log(this.idVengador, this.nombreVengador, this.imgVengador);
    this.color2 = "dark"
  }
}
