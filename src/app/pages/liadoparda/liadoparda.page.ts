import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liadoparda',
  templateUrl: './liadoparda.page.html',
  styleUrls: ['./liadoparda.page.scss'],
})
export class LiadopardaPage implements OnInit {

  constructor() { }

  liadoparda = [

    { 
      nombre: 'Gente afectada',
      audio: 'assets/audios/liadoparda/afectado.mp3',
    },
    { 
      nombre: 'A que te refieres',
      audio: 'assets/audios/liadoparda/aqueterefieres.mp3',
    },
    { 
      nombre: 'Reacción que flipas',
      audio: 'assets/audios/liadoparda/reaccion.mp3',
    },
    {
      nombre: 'Gas amarillo',
      audio: 'assets/audios/liadoparda/gasamarillo.mp3',
    },
    {
      nombre: 'La he liado parda',
      audio: 'assets/audios/liadoparda/parda.mp3',
    },
    {
      nombre: 'Pedir perdon',
      audio: 'assets/audios/liadoparda/perdon.mp3',
    },
    {
      nombre: 'Ácido clorhídrico',
      audio: 'assets/audios/liadoparda/sulfato.mp3',
    },
  ];


  reproducirAudio(sonido){

    let audio = new Audio();
    audio.src = sonido.audio;
    audio.load();
    audio.play();


}








  ngOnInit() {
  }

}
