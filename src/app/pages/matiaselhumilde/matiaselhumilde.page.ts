import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matiaselhumilde',
  templateUrl: './matiaselhumilde.page.html',
  styleUrls: ['./matiaselhumilde.page.scss'],
})
export class MatiaselhumildePage implements OnInit {

  constructor() { }


  matiaselhumilde = [

    { 
      nombre: 'Huele a embrague',
      audio: 'assets/audios/matiaselhumilde/embrague.mp3',
    },
    { 
      nombre: 'Fácilmente',
      audio: 'assets/audios/matiaselhumilde/facilmente.mp3',
    },
    { 
      nombre: 'Me sobra el dinero',
      audio: 'assets/audios/matiaselhumilde/mesobra.mp3',
    },
    {
      nombre: 'Me los paso por la piedra',
      audio: 'assets/audios/matiaselhumilde/piedra.mp3',
    },
    {
      nombre: 'Tengo el viper',
      audio: 'assets/audios/matiaselhumilde/viper.mp3',
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
