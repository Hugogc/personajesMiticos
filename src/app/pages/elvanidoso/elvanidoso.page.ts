import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elvanidoso',
  templateUrl: './elvanidoso.page.html',
  styleUrls: ['./elvanidoso.page.scss'],
})
export class ElvanidosoPage implements OnInit {

  constructor() { }


  elvanidoso = [

    { 
      nombre: 'Al atracador',
      audio: 'assets/audios/elvanidoso/atracador.mp3',
    },
    { 
      nombre: 'Es la autentica salud',
      audio: 'assets/audios/elvanidoso/autenticasalud.mp3',
    },
    { 
      nombre: 'Avisé',
      audio: 'assets/audios/elvanidoso/avise.mp3',
    },
    {
      nombre: 'Banco',
      audio: 'assets/audios/elvanidoso/banco.mp3',
    },
    {
      nombre: 'Coche',
      audio: 'assets/audios/elvanidoso/coche.mp3',
    },
    {
      nombre: '5 derechos universales',
      audio: 'assets/audios/elvanidoso/derechos.mp3',
    },
    {
      nombre: 'La tuve que forzar',
      audio: 'assets/audios/elvanidoso/forzar.mp3',
    },
    {
      nombre: 'La droga',
      audio: 'assets/audios/elvanidoso/ladroga.mp3',
    },
    {
      nombre: 'La felicidad',
      audio: 'assets/audios/elvanidoso/lafelicidad.mp3',
    },
    {
      nombre: 'Eres un maricón',
      audio: 'assets/audios/elvanidoso/maricon.mp3',
    },
    {
      nombre: 'Me metieron',
      audio: 'assets/audios/elvanidoso/memetieron.mp3',
    },
    {
      nombre: 'Muy buena',
      audio: 'assets/audios/elvanidoso/muybuena.mp3',
    },
    {
      nombre: 'No tengo prisa',
      audio: 'assets/audios/elvanidoso/noprisa.mp3',
    }, 
    {
      nombre: 'Estoy de permiso',
      audio: 'assets/audios/elvanidoso/permiso.mp3',
    },
    {
      nombre: 'Me encontré con mi cuñado',
      audio: 'assets/audios/elvanidoso/cunado.mp3',
    },
    {
      nombre: 'Yo soy un vanidoso',
      audio: 'assets/audios/elvanidoso/vanidoso.mp3',
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
