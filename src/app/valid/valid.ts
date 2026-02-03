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
       submitted= false;
       userDetails= new FormGroup({
        name: new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
        age: new FormControl(null,[Validators.required,Validators.min(18),Validators.max(60)])
       })
       submit(){
        this.submitted=true;
        
        if(this.userDetails.valid){
          console.log(this.userDetails.value);
          this.userDetails.reset();
          this.submitted= false;

        }
        else{
          this.userDetails.markAllAsTouched();
        }
       }


         
}
