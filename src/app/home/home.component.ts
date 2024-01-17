import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  pets=[
    {name:'Buddy', imageUrl:'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?cs=srgb&dl=adorable-animal-breed-1108099.jpg&fm=jpg'},
    {name:'Buddy', imageUrl:'https://getwallpapers.com/wallpaper/full/6/1/5/959887-puppy-wallpaper-desktop-2048x1536-iphone.jpg'},
  ];
  
}
