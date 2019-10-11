import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baptisterio',
  templateUrl: './baptisterio.page.html',
  styleUrls: ['./baptisterio.page.scss'],
})
export class BaptisterioPage implements OnInit {

  constructor() { }

  baptisterio = [

    { 
      nombre: 'Está usted servido',
      audio: 'assets/audios/baptisterio/estaustedservido.mp3',
    },
    { 
      nombre: 'Todo cubierto de tierra',
      audio: 'assets/audios/baptisterio/entrada.mp3',
    },
    { 
      nombre: 'Piedra romana',
      audio: 'assets/audios/baptisterio/mulos.mp3',
    },
    {
      nombre: 'Se encontró',
      audio: 'assets/audios/baptisterio/seencontro.mp3',
    },
    {
      nombre: 'A quien no le va a gustar',
      audio: 'assets/audios/baptisterio/aquiennolevaagustar.mp3',
    },
    {
      nombre: 'Por este existe el baptisterio',
      audio: 'assets/audios/baptisterio/poreste.mp3',
    },
    {
      nombre: 'Abrir la puerta',
      audio: 'assets/audios/baptisterio/abrirlapuerta.mp3',
    },
    {
      nombre: 'Toda una vida',
      audio: 'assets/audios/baptisterio/todaunavida.mp3',
    },
    {
      nombre: 'Se lo merece todo',
      audio: 'assets/audios/baptisterio/selomerece.mp3',
    },
    {
      nombre: 'Mi abuelo no',
      audio: 'assets/audios/baptisterio/miabuelono.mp3',
    },
    {
      nombre: 'Baptisterio romano',
      audio: 'assets/audios/baptisterio/esteelqueyoquiero.mp3',
    },
    {
      nombre: 'Tragaluces',
      audio: 'assets/audios/baptisterio/tragaluces.mp3',
    },
    {
      nombre: 'Las nietas, los nietos',
      audio: 'assets/audios/baptisterio/lasnietas.mp3',
    },
    {
      nombre: 'Estoy nerviosa',
      audio: 'assets/audios/baptisterio/estoynerviosa.mp3',
    },
    {
      nombre: 'Alúmbrame a mí mayormente',
      audio: 'assets/audios/baptisterio/alumbrameami.mp3',
    },
    {
      nombre: 'Hay ruidos de romanos',
      audio: 'assets/audios/baptisterio/espiritus.mp3',
    },
    {
      nombre: 'Y dice allí',
      audio: 'assets/audios/baptisterio/dice.mp3',
    },
    {
      nombre: 'La cúpula',
      audio: 'assets/audios/baptisterio/lacupula.mp3',
    },
    {
      nombre: 'Primero los romanos',
      audio: 'assets/audios/baptisterio/lacripta.mp3',
    },
    {
      nombre: 'Canción 1',
      audio: 'assets/audios/baptisterio/cancion1.mp3',
    },
    {
      nombre: 'Canción 2',
      audio: 'assets/audios/baptisterio/cancion2.mp3',
    },
    {
      nombre: 'Para que usted se entere',
      audio: 'assets/audios/baptisterio/paqueseentere.mp3',
    },
    {
      nombre: 'Viva España',
      audio: 'assets/audios/baptisterio/vivaespana.mp3',
    },
    {
      nombre: 'Mix',
      audio: 'assets/audios/baptisterio/mix1.mp3',
    },
    {
      nombre: 'Risas',
      audio: 'assets/audios/baptisterio/risas.mp3',
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
