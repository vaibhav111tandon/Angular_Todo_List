import { FormsModule } from '@angular/forms';
import { Component, NgModule } from '@angular/core';


@NgModule({
    imports: [
         FormsModule      
    ]
})


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  items = ["Vaibhav", "Tandon"];
  newItem = "";
  pushItem = function(){
    if(this.newItem !== ""){
      this.items.push(this.newItem);
      this.newItem = "";
    }
  }
  removeItem = function(index){
    this.items.splice(index, 1);
  }
}
