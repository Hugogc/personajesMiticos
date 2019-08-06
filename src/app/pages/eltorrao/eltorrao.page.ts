import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eltorrao',
  templateUrl: './eltorrao.page.html',
  styleUrls: ['./eltorrao.page.scss'],
})
export class EltorraoPage implements OnInit {

  constructor() { }


  eltorrao = [

    { 
      nombre: 'Churros y turrón',
      audio: 'assets/audios/eltorrao/churros.mp3',
    },
    { 
      nombre: 'El cura',
      audio: 'assets/audios/eltorrao/cura.mp3',
    },
    { 
      nombre: 'Es mi novia',
      audio: 'assets/audios/eltorrao/esminovia.mp3',
    },
    {
      nombre: 'La hora',
      audio: 'assets/audios/eltorrao/lahora.mp3',
    },
    {
      nombre: 'Lo malo',
      audio: 'assets/audios/eltorrao/lomalo.mp3',
    },
    {
      nombre: 'MariPepa',
      audio: 'assets/audios/eltorrao/maripepa.mp3',
    },
    {
      nombre: 'Novia',
      audio: 'assets/audios/eltorrao/novia.mp3',
    },
    {
      nombre: 'Palo',
      audio: 'assets/audios/eltorrao/palo.mp3',
    },
    {
      nombre: 'Sembrando',
      audio: 'assets/audios/eltorrao/sembrando.mp3',
    },
    {
      nombre: 'Siesta',
      audio: 'assets/audios/eltorrao/siesta.mp3',
    },
    {
      nombre: 'Talego',
      audio: 'assets/audios/eltorrao/talego.mp3',
    },
    {
      nombre: 'La vieja',
      audio: 'assets/audios/eltorrao/vieja.mp3',
    },
    {
      nombre: 'Ya mismo',
      audio: 'assets/audios/eltorrao/yamismo.mp3',
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

