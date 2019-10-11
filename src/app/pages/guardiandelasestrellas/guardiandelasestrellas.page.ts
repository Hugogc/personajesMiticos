import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guardiandelasestrellas',
  templateUrl: './guardiandelasestrellas.page.html',
  styleUrls: ['./guardiandelasestrellas.page.scss'],
})
export class GuardiandelasestrellasPage implements OnInit {

  constructor() { }
  
  guardiandelasestrellas = [

    { 
      nombre: 'La biblia',
      audio: 'assets/audios/elguardiandelasestrellas/biblia.mp3',
    },
    { 
      nombre: 'He convocado',
      audio: 'assets/audios/elguardiandelasestrellas/convocado.mp3',
    },
    { 
      nombre: 'Mi estirpe',
      audio: 'assets/audios/elguardiandelasestrellas/estirpe.mp3',
    },
    {
      nombre: 'No pienso f*****',
      audio: 'assets/audios/elguardiandelasestrellas/follar.mp3',
    },
    {
      nombre: 'El guardián de las estrellas',
      audio: 'assets/audios/elguardiandelasestrellas/guardian.mp3',
    },
    {
      nombre: 'Habitantes de Sol',
      audio: 'assets/audios/elguardiandelasestrellas/habitantessol.mp3',
    },
    {
      nombre: 'Son mis hermanas',
      audio: 'assets/audios/elguardiandelasestrellas/hermanas.mp3',
    },
    {
      nombre: 'Luz y agua',
      audio: 'assets/audios/elguardiandelasestrellas/luzyagua.mp3',
    },
    {
      nombre: 'Vivís en Matrix',
      audio: 'assets/audios/elguardiandelasestrellas/matrix.mp3',
    },
    {
      nombre: 'Me entendéis',
      audio: 'assets/audios/elguardiandelasestrellas/meentendeis.mp3',
    },
    {
      nombre: 'Mentalmente',
      audio: 'assets/audios/elguardiandelasestrellas/mentalmente.mp3',
    },
    {
      nombre: 'No hay vida',
      audio: 'assets/audios/elguardiandelasestrellas/nohayvida.mp3',
    },
    {
      nombre: 'Mi plan es...',
      audio: 'assets/audios/elguardiandelasestrellas/plan.mp3',
    }, 
    {
      nombre: 'Las profecías',
      audio: 'assets/audios/elguardiandelasestrellas/profecias.mp3',
    },
    {
      nombre: 'El Rey es mi padre',
      audio: 'assets/audios/elguardiandelasestrellas/rey.mp3',
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
