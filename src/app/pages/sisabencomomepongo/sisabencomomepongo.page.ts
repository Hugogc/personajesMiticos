import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sisabencomomepongo',
  templateUrl: './sisabencomomepongo.page.html',
  styleUrls: ['./sisabencomomepongo.page.scss'],
})
export class SisabencomomepongoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  reproducirAudio(sisabencomomepongo){

    let sonido = new Audio(sisabencomomepongo);
    sonido.src = sisabencomomepongo;
    sonido.load();
    sonido.play();


}





}
