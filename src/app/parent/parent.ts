import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ FormsModule,Child],
  templateUrl: './parent.html',
  styleUrls: ['./parent.css'],
})
export class Parent {
           names:string[] =['Harini','priya','Vaishali','Balamurugan','suganthi'];
           searchText: string='';
           filteredNames: string[]=[];
           selectedName: string='dharun';
           onSearchChange(){
            if(this.searchText.trim()===''){
              this.filteredNames=[];

            }
            else{
              this.filteredNames= this.names.filter(name=>name.toLowerCase().includes(this.searchText.toLowerCase()));
            }
           }
           selectName(name: string){
                   this.selectedName = name;
                   this.searchText= name;
                   this.filteredNames=[];

           }
           
      
}


