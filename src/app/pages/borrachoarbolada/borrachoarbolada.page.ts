import { Component, OnInit } from '@angular/core';
import { BorrachoarboladaPageModule } from './borrachoarbolada.module';



@Component({
  selector: 'app-borrachoarbolada',
  templateUrl: './borrachoarbolada.page.html',
  styleUrls: ['./borrachoarbolada.page.scss'],
})
export class BorrachoarboladaPage {





  
  constructor(){}



 borrachoarbolada = [

      { 
        nombre: 'Se fué a la puta',
        audio: 'assets/audios/borrachoarbolada/sefuealaputa.mp3',
      },
      { 
        nombre: '60 km/hora',
        audio: 'assets/audios/borrachoarbolada/60kmhora.mp3',
      },
      { 
        nombre: 'Arbolada',
        audio: 'assets/audios/borrachoarbolada/arbolada.mp3',
      },
      {
        nombre: 'Espero que se mejore',
        audio: 'assets/audios/borrachoarbolada/esperomejore.mp3',
      },
      {
        nombre: 'La pared',
        audio: 'assets/audios/borrachoarbolada/lapared.mp3',
      },
      {
        nombre: 'Me hizo volar',
        audio: 'assets/audios/borrachoarbolada/mehizovolar.mp3',
      },
      {
        nombre: 'Pendiente',
        audio: 'assets/audios/borrachoarbolada/pendiente.mp3',
      },
      {
        nombre: 'Subir y bajar',
        audio: 'assets/audios/borrachoarbolada/subirybajar.mp3',
      },
      {
        nombre: 'Trambolico',
        audio: 'assets/audios/borrachoarbolada/tramboliko.mp3',
      },
      {
        nombre: 'Vamonos a casa',
        audio: 'assets/audios/borrachoarbolada/vamonosacasa.mp3',
      },
      {
        nombre: 'Y yo volé de él',
        audio: 'assets/audios/borrachoarbolada/voledeel.mp3',
      },
      {
        nombre: 'Yo estoy bien',
        audio: 'assets/audios/borrachoarbolada/yoestoybien.mp3',
      },
      {
        nombre: 'Y voló',
        audio: 'assets/audios/borrachoarbolada/yvolo.mp3',
      }


    
  

    ]

   reproducirAudio(sonido){

      let audio = new Audio();
      audio.src = sonido.audio;
      audio.load();
      audio.play();


  }

  ngOnInit() {
  }

}
