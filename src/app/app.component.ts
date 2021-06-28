import { Component, Input, ViewChild } from '@angular/core';
import { ToggleComponent } from './toggle/toggle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FirstAngularProject';
  isChecked = false;
  counter = 2;
  currentIndex = 0;

  ngOnInit(){
  }

  ngAfterViewInit(){
  }

}
