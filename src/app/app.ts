import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';

import { Parent } from './parent/parent';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkActive,RouterLink,Parent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
       
}
