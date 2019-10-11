import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miguelelmaquina',
  templateUrl: './miguelelmaquina.page.html',
  styleUrls: ['./miguelelmaquina.page.scss'],
})
export class MiguelelmaquinaPage implements OnInit {

  constructor() { }

  miguelelmaquina = [

    { 
      nombre: 'Coje el paquete',
      audio: 'assets/audios/miguelelmaquina/cojeelpaquete.mp3',
    },
    { 
      nombre: '¡¡¡Guau!!!',
      audio: 'assets/audios/miguelelmaquina/guau.mp3',
    },
    { 
      nombre: 'Los picoletos',
      audio: 'assets/audios/miguelelmaquina/lospicoletos.mp3',
    },
    {
      nombre: 'Me voy a la tunara',
      audio: 'assets/audios/miguelelmaquina/mevoyalatunara.mp3',
    },
    {
      nombre: 'Pa lo bueno y pa lo malo',
      audio: 'assets/audios/miguelelmaquina/palobueno.mp3',
    },
    {
      nombre: 'Ratata',
      audio: 'assets/audios/miguelelmaquina/ratata.mp3',
    },
    {
      nombre: 'Tatata',
      audio: 'assets/audios/miguelelmaquina/tatata.mp3',
    },
    {
      nombre: 'Tututa',
      audio: 'assets/audios/miguelelmaquina/tututa.mp3',
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
