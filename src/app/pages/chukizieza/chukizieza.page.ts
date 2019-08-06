import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chukizieza',
  templateUrl: './chukizieza.page.html',
  styleUrls: ['./chukizieza.page.scss'],
})
export class ChukiziezaPage implements OnInit {

  constructor() { }


  chukizieza = [

    { 
      nombre: 'Christian',
      audio: 'assets/audios/chukizieza/christian.mp3',
    },
    { 
      nombre: 'Cuando lo enganche',
      audio: 'assets/audios/chukizieza/cuandoloenganche.mp3',
    },
    { 
      nombre: 'Díselo bien claro',
      audio: 'assets/audios/chukizieza/diselobienclaro.mp3',
    },
    {
      nombre: 'Drogadicto',
      audio: 'assets/audios/chukizieza/drogadicto.mp3',
    },
    {
      nombre: 'El chuki de Zieza',
      audio: 'assets/audios/chukizieza/elchukidezieza.mp3',
    },
    {
      nombre: 'Hijoputa',
      audio: 'assets/audios/chukizieza/hijoputa.mp3',
    },
    {
      nombre: 'No me diste ni media',
      audio: 'assets/audios/chukizieza/nomedistenimedia.mp3',
    },
    {
      nombre: 'Quieres sentirla en el pecho',
      audio: 'assets/audios/chukizieza/quieressentirlaenelpecho.mp3',
    },
    {
      nombre: 'Te chivaste',
      audio: 'assets/audios/chukizieza/techivaste.mp3',
    },
    {
      nombre: 'Te chivaste de mi cara',
      audio: 'assets/audios/chukizieza/techivastedemicara.mp3',
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
