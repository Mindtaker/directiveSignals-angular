import { Component, signal } from '@angular/core';

interface MenuItem {
  name: string;
  link: string;
}

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
  public menuItems = signal<MenuItem[]>([
    { name: 'Counter', link: 'counter' },
    { name: 'User', link: 'user-info' },
    { name: 'Mutations', link: 'properties' },
  ]);
}
