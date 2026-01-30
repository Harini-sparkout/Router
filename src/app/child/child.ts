import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input,  Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-child',
  imports: [FormsModule],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  
      @Input() value: string="";
     
}
