import { CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-userform',
  imports: [FormsModule],
  templateUrl: './userform.html',
  styleUrl: './userform.css',
})
export class Userform implements OnInit{


  @ViewChild('detailsForm')detailsForm:NgForm|undefined= undefined;
            details={
              name:'',
              age: null,
              gender:''
            };
            ngOnInit():void{
              console.log(this.detailsForm?.value)

            }
           submit(form: NgForm) {
             if (form.invalid)  { 
                return; } 
                console.log(form.value);
               form.resetForm();
               }
}
