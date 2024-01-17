import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RegisterFormComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontEndTask';
  pets=[
    {name:'Buddy', imageUrl:'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?cs=srgb&dl=adorable-animal-breed-1108099.jpg&fm=jpg'},
    {name:'Buddy', imageUrl:'https://getwallpapers.com/wallpaper/full/6/1/5/959887-puppy-wallpaper-desktop-2048x1536-iphone.jpg'},
  ];
}
