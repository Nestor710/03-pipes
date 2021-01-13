import { Component } from '@angular/core';
import { promise } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre = 'Nestor';
  nombre2 = 'NEstor eduARdo LimA rOjaS  '

  arreglo = [1,2,3,4,5,6,7,8,9,10];

  PI = Math.PI;

  a:number = 0.234;

  salario = 2345.1;

  heroe = {
    nombre:'Peter',
    clave:'Spiderman',
    edad: '25',
    tio:'Ben Parker',
    novia:'Mary jane',
    direccion : {
      calle:'17',
      barrio:'San francisco',
      casa:'Morada de San Francisco',
      numero:'25-10'

    }

  }

  valorDePromesa = new Promise( ( resolve, reject )=>{

    setTimeout(() => resolve('Llego la data!'), 500);

  } )

  fecha = new Date();

  video = "K3Qzzggn--s";

  activar:boolean = true;

}
