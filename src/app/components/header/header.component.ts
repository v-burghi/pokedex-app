import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  items = [
    {label: 'Update', icon: 'pi pi-refresh', command: () => {this.update();}},
    {label: 'Delete', icon: 'pi pi-times', command: () => {this.delete();}},
    {label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io'},
    {separator: true},
    {label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup']}
    
];

  constructor ( ) { }

  update() {
    console.log('update');
  }
  
  delete() {
    console.log('delete');
  }

}
