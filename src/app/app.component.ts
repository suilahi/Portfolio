import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjetComponent } from './projet/projet.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent,HomeComponent,AboutComponent,ProjetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
