<<<<<<< HEAD
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 52ae5b67a6a95fe6414fa83d96b4fbca6384de08

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
<<<<<<< HEAD
export class HomeComponent implements AfterViewInit {
  @ViewChild('vid', {static: false}) private vid: ElementRef;
  constructor() {
   }

/*
  playVideo() {
    if (this.vid.nativeElement.paused) {
      this.vid.nativeElement.play();
    } else {
      this.vid.nativeElement.pause();
    }
  }
*/
  ngAfterViewInit(): void {
    this.vid.nativeElement.muted = 'false';
    this.vid.nativeElement.play();
=======
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
>>>>>>> 52ae5b67a6a95fe6414fa83d96b4fbca6384de08
  }

}
