import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  actionName : string = 'signin'

  changeAction(action:string){
    this.actionName = action
  }
}
