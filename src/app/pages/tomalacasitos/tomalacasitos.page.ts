import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tomalacasitos',
  templateUrl: './tomalacasitos.page.html',
  styleUrls: ['./tomalacasitos.page.scss'],
})
export class TomalacasitosPage implements OnInit {

  constructor() { }


  tomalacasitos = [

    { 
      nombre: 'Casi na',
      audio: 'assets/audios/tomalacasitos/casina.mp3',
    },
    { 
      nombre: 'Jaja',
      audio: 'assets/audios/tomalacasitos/jaja.mp3',
    },
    { 
      nombre: 'La mano',
      audio: 'assets/audios/tomalacasitos/lamano.mp3',
    },
    {
      nombre: 'La mirla',
      audio: 'assets/audios/tomalacasitos/lamirla.mp3',
    },
    {
      nombre: 'La prueba de alcoholemia',
      audio: 'assets/audios/tomalacasitos/laprueba.mp3',
    },
    {
      nombre: 'Pim pam toma lacasitos',
      audio: 'assets/audios/tomalacasitos/pimpam.mp3',
    },
    {
      nombre: 'Pim pam toma lacasitos 2',
      audio: 'assets/audios/tomalacasitos/pimpam2.mp3',
    },
    {
      nombre: 'Risas varias',
      audio: 'assets/audios/tomalacasitos/risas.mp3',
    },
    {
      nombre: 'Tripis',
      audio: 'assets/audios/tomalacasitos/tripis.mp3',
    },
    {
      nombre: 'Viva España, viva el Rey...',
      audio: 'assets/audios/tomalacasitos/viva.mp3',
    },
    {
      nombre: 'Viva España',
      audio: 'assets/audios/tomalacasitos/vivaespana.mp3',
    },
    {
      nombre: 'Viva la Guardia Civil',
      audio: 'assets/audios/tomalacasitos/vivaguardia.mp3',
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
