import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-puntajes',
  templateUrl: './puntajes.component.html',
  styleUrls: ['./puntajes.component.css']
})
export class PuntajesComponent implements OnInit {
  estadisticas:any[] = []
  datos:Observable<any[]>
  json:any = []
  usuarios:any[] =[]
  nombre:string =""
  id:number
  acierto:number
  constructor(private http: HttpClient, private aFS: AngularFirestore) { 
    this.getData()
  }
  getData(){
    this.datos = this.aFS.collection('usuarios').valueChanges()
  }

  agregarItem(){
    //this.estadisticas[0] = this.id
    //this.estadisticas[1] = this.nombre
    //this.estadisticas[2] = this.acierto
    let json:any = {
      id: this.id,
      jugador: this.nombre,
      aciertos: this.acierto
    }
    this.estadisticas.push(json)
  }

  ngOnInit() {
    this.estadisticas = [
      {
        id: 1,
        jugador: 'Albery Arteaga',
        aciertos: 4
      },
      {
        id: 2,
        jugador: 'Bryan Villanueva',
        aciertos: 2
      },
      {
        id: 3,
        jugador: 'Mario Alvarenga',
        aciertos: 3
      },
      {
        id: 4,
        jugador: 'David Alvarado',
        aciertos: 5
      }
    ]
  }

}
