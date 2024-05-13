import { Component } from '@angular/core';

@Component({
  selector: 'app-tarea',
  standalone: true,
  imports: [],
  templateUrl: './tarea.component.html',
  styleUrl: './tarea.component.css'
})
export class TareaComponent {
  title = 'papi';

  cont = 0;
  cont1=999;
 contador() {
   setInterval(() => {
    this.cont = this.cont + 1;
     this.cont1--;
   }, 1000);
 }
 
}

