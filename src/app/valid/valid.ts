import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl,   FormGroup, ReactiveFormsModule,Validators } from '@angular/forms';

@Component({
  selector: 'app-valid',
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './valid.html',
  styleUrl: './valid.css',
})
export class Valid {
        userDetails = new FormGroup({
       name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(60)]),
       age: new FormControl(null,[Validators.required,Validators.min(18),Validators.max(100)])
      


       

        });
        submit(){
          if(this.userDetails.valid){
console.log(this.userDetails.value);
          }
          else{
            this.userDetails.markAllAsTouched();
          }
        
       }
         
}
