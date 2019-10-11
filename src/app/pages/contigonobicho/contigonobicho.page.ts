import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contigonobicho',
  templateUrl: './contigonobicho.page.html',
  styleUrls: ['./contigonobicho.page.scss'],
})
export class ContigonobichoPage implements OnInit {

  constructor() { }


  contigonobicho = [

    { 
      nombre: 'Delante de 6 amigotes',
      audio: 'assets/audios/contigonobicho/6amigotes.mp3',
    },
    { 
      nombre: 'Sólo quería darle amor',
      audio: 'assets/audios/contigonobicho/amor.mp3',
    },
    { 
      nombre: 'Bastante atractivo',
      audio: 'assets/audios/contigonobicho/atractivo.mp3',
    },
    {
      nombre: 'La bestia parda',
      audio: 'assets/audios/contigonobicho/bestiaparda.mp3',
    },
    {
      nombre: 'Chewaka',
      audio: 'assets/audios/contigonobicho/chewaka.mp3',
    },
    {
      nombre: 'Un cochino beso',
      audio: 'assets/audios/contigonobicho/cochinobeso.mp3',
    },
    {
      nombre: 'No es por crispar',
      audio: 'assets/audios/contigonobicho/crispar.mp3',
    },
    {
      nombre: 'Da que pensar',
      audio: 'assets/audios/contigonobicho/daquepensar.mp3',
    },
    {
      nombre: 'El día después',
      audio: 'assets/audios/contigonobicho/diadespues.mp3',
    },
    {
      nombre: 'Dice que no',
      audio: 'assets/audios/contigonobicho/dicequeno.mp3',
    },
    {
      nombre: 'Saca dignidad',
      audio: 'assets/audios/contigonobicho/dignidad.mp3',
    },
    {
      nombre: 'Elegante',
      audio: 'assets/audios/contigonobicho/elegante.mp3',
    },
    {
      nombre: 'En su vida',
      audio: 'assets/audios/contigonobicho/ensuvida.mp3',
    },
    {
      nombre: 'Escoba',
      audio: 'assets/audios/contigonobicho/escoba.mp3',
    },
    {
      nombre: 'Guapo',
      audio: 'assets/audios/contigonobicho/guapo.mp3',
    },
    {
      nombre: 'Hija de p***',
      audio: 'assets/audios/contigonobicho/hijadeputa.mp3',
    },
    {
      nombre: 'Hija de una hiena',
      audio: 'assets/audios/contigonobicho/hijadeunahiena.mp3',
    },
    {
      nombre: 'Ya no habrá otro día',
      audio: 'assets/audios/contigonobicho/otrodia.mp3',
    },
    {
      nombre: 'Apartarme con un palo',
      audio: 'assets/audios/contigonobicho/unpalo.mp3',
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












