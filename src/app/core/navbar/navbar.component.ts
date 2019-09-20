import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'ub-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Início',
        icon: 'pi pi-home',
        routerLink: ['/login']
      },
      {
        label: 'Testes',
        icon: 'pi pi-list',
        items: [
          {
            label: 'Programar testes',
            routerLink: ['/']
          },
          {
            label: 'Gerenciar testes',
            routerLink: ['/']
          }
        ]
      },
      {
        label: 'Usuários',
        icon: 'pi pi-users',
        routerLink: ['/']
      },
      {
        label: 'Sair',
        icon: 'pi pi-power-off',
        routerLink: ['/']
      }
    ];
  }

}
