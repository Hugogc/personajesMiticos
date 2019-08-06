import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ogrodrogas',
  templateUrl: './ogrodrogas.page.html',
  styleUrls: ['./ogrodrogas.page.scss'],
})
export class OgrodrogasPage implements OnInit {

  constructor() { }

  ogrodrogas = [

    { 
      nombre: '2 rayas',
      audio: 'assets/audios/ogrodrogas/2rayas.mp3',
    },
    { 
      nombre: 'Alcohol na más',
      audio: 'assets/audios/ogrodrogas/alcoholnamas.mp3',
    },
    { 
      nombre: 'Bbbrrr',
      audio: 'assets/audios/ogrodrogas/bbbrrr.mp3',
    },
    {
      nombre: 'Estoy borrachísima',
      audio: 'assets/audios/ogrodrogas/borrachisima.mp3',
    },
    {
      nombre: 'Colega',
      audio: 'assets/audios/ogrodrogas/colega.mp3',
    },
    {
      nombre: 'Desinibidi',
      audio: 'assets/audios/ogrodrogas/desinibidi.mp3',
    },
    {
      nombre: 'Mmmrrr',
      audio: 'assets/audios/ogrodrogas/mmmrrrr.mp3',
    },
    {
      nombre: 'Hola hola',
      audio: 'assets/audios/ogrodrogas/holahola.mp3',
    },
    {
      nombre: 'Hoooola',
      audio: 'assets/audios/ogrodrogas/hoooola.mp3',
    },
    {
      nombre: 'Speed y de tó',
      audio: 'assets/audios/ogrodrogas/speedydeto.mp3',
    },
    {
      nombre: 'Yo me meto toda',
      audio: 'assets/audios/ogrodrogas/yomemetotoda.mp3',
    },
    {
      nombre: 'Yo no consumo nada',
      audio: 'assets/audios/ogrodrogas/yonoconsumonada2.mp3',
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
 