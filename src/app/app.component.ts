import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Score';
  firstValue = 0;
  SecondValue = 0;
  showButtons: boolean=true;
  first() {
    this.firstValue++;
    this.checkCondtion();

  }
  second() {
    this.SecondValue++;
    this.checkCondtion();
  }
  checkCondtion() {
    if (this.firstValue == 5 || this.SecondValue == 5) {
      this.showButtons=false;
    }
  }
  reset(){
    this.firstValue=0;
    this.SecondValue=0;
    this.showButtons=true;
  }
}
