import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-losdeleclipse',
  templateUrl: './losdeleclipse.page.html',
  styleUrls: ['./losdeleclipse.page.scss'],
})
export class LosdeleclipsePage implements OnInit {

  constructor() { }


  losdeleclipse = [

    { 
      nombre: '5 botellas de White Label',
      audio: 'assets/audios/losdeleclipse/botellas.mp3',
    },
    { 
      nombre: 'En medio del control',
      audio: 'assets/audios/losdeleclipse/control.mp3',
    },
    { 
      nombre: 'Corten por favor',
      audio: 'assets/audios/losdeleclipse/corten.mp3',
    },
    {
      nombre: 'Le multan, pues le da igual',
      audio: 'assets/audios/losdeleclipse/daigual.mp3',
    },
    {
      nombre: 'La denuncia',
      audio: 'assets/audios/losdeleclipse/denuncia.mp3',
    },
    {
      nombre: 'Me quedan 2 puntos',
      audio: 'assets/audios/losdeleclipse/dospuntos.mp3',
    },
    {
      nombre: 'Por verle con el Eclipse',
      audio: 'assets/audios/losdeleclipse/eclipse.mp3',
    },
    {
      nombre: 'Es impresionante',
      audio: 'assets/audios/losdeleclipse/impresionante.mp3',
    },
    {
      nombre: 'La merca no se enseña',
      audio: 'assets/audios/losdeleclipse/lamerca.mp3',
    },
    {
      nombre: 'La poli se mete',
      audio: 'assets/audios/losdeleclipse/lapolisemete.mp3',
    },
    {
      nombre: 'Este coche es marronero',
      audio: 'assets/audios/losdeleclipse/marronero.mp3',
    },
    {
      nombre: 'Me da igual',
      audio: 'assets/audios/losdeleclipse/medaigual.mp3',
    },
    {
      nombre: 'Nos han parado',
      audio: 'assets/audios/losdeleclipse/noshanparado.mp3',
    }, 
    {
      nombre: 'Es un parguela',
      audio: 'assets/audios/losdeleclipse/parguela.mp3',
    },
    {
      nombre: 'Hay gente muy peligrosa',
      audio: 'assets/audios/losdeleclipse/peligrosa.mp3',
    },
    {
      nombre: 'De buena mañana',
      audio: 'assets/audios/losdeleclipse/placer.mp3',
    },
    {
      nombre: 'Por mi hija que te disparo',
      audio: 'assets/audios/losdeleclipse/pormihija.mp3',
    },
    {
      nombre: 'Para quitarnos las penas',
      audio: 'assets/audios/losdeleclipse/quitarpenas.mp3',
    },
    {
      nombre: 'Si sois civiles....',
      audio: 'assets/audios/losdeleclipse/soisciviles.mp3',
    },
    {
      nombre: '¿Te ries?',
      audio: 'assets/audios/losdeleclipse/teries.mp3',
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
