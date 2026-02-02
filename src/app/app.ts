import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';

import { Parent } from './parent/parent';
import { Userform } from './userform/userform';
import { Valid } from './valid/valid';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkActive,RouterLink,Parent,Userform,Valid],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
       
}
