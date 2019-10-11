import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elfua',
  templateUrl: './elfua.page.html',
  styleUrls: ['./elfua.page.scss'],
})
export class ElfuaPage implements OnInit {

  constructor() { }

  elfua = [

    { 
      nombre: 'Saco el caracter',
      audio: 'assets/audios/elfua/caracter.mp3',
    },
    { 
      nombre: 'Eso es el fua',
      audio: 'assets/audios/elfua/esoeselfua.mp3',
    },
    {
      nombre: 'Es que ya no puedo',
      audio: 'assets/audios/elfua/esqueyanopuedo.mp3',
    },
    { 
      nombre: 'Fuaa 1',
      audio: 'assets/audios/elfua/fua1.mp3',
    },
    {
      nombre: 'Fuaa 2',
      audio: 'assets/audios/elfua/fua2.mp3',
    },
    {
      nombre: 'Fuaa 3',
      audio: 'assets/audios/elfua/fua3.mp3',
    },
    {
      nombre: 'Fuaaaaa',
      audio: 'assets/audios/elfua/fuaaaaa.mp3',
    },
    {
      nombre: 'Lo que se proyecta',
      audio: 'assets/audios/elfua/loqueseproyecta.mp3',
    },
    {
      nombre: 'Lo voy a sacar',
      audio: 'assets/audios/elfua/lovoyasacar.mp3',
    },
    {
      nombre: 'Mix fuaaaa',
      audio: 'assets/audios/elfua/mixfua.mp3',
    },
    {
      nombre: 'No importa',
      audio: 'assets/audios/elfua/noimporta.mp3',
    },
    {
      nombre: 'No no no',
      audio: 'assets/audios/elfua/nonono.mp3',
    },
    {
      nombre: 'Significa dar el extra',
      audio: 'assets/audios/elfua/significa.mp3',
    },
    {
      nombre: 'El verdadero fua',
      audio: 'assets/audios/elfua/verdaderofua.mp3',
    },
    {
      nombre: 'Ya no puedo pero...',
      audio: 'assets/audios/elfua/yanopuedo.mp3',
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
