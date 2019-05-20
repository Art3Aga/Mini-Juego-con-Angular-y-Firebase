import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
  datos:Observable<any[]>

  constructor(private aFS: AngularFirestore){
    //this.datos = this.aFS.collection('usuarios').valueChanges()
    
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
  agregar(){
    /*this.aFS.collection('usuarios').doc('1').update({
      aciertos: 5,
      jugador: "Marito"
    });*/
    this.aFS.collection('usuarios').doc(this.nombre).set({
      aciertos: this.n_aciertos,
      jugador: this.nombre
    })
  }
  ngOnInit(){

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
