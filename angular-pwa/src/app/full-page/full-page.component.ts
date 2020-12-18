import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-page',
  templateUrl: './full-page.component.html',
  styleUrls: ['./full-page.component.scss']
})
export class FullPageComponent implements OnInit {
  menuOpen: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  openMenu() {
   if(this.menuOpen === false) {
    this.menuOpen = true;
   } else {
     this.menuOpen = false;
   }
  }

  goHome() {
    window.location.href = "./";
  }

}
