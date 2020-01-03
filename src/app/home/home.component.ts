import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
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
  }

}
