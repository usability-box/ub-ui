import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ub-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  teste = false;
  active = true;
  constructor() { }

  ngOnInit() {
  }

  collapse() {
    this.teste = !this.teste;
  }

  toggleMenu() {
    this.active = !this.active;
  }

  isOpen(): boolean {
    return this.active;
  }

}
