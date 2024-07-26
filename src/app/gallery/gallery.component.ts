import { Component } from '@angular/core';

interface card{
  cName:string;
  imgg:string;
}


@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

  cards : card[] = [
    { cName:"card 1", imgg:"../../assets/images/port3.png"},
    { cName:"card 2", imgg:"../../assets/images/poert1.png"},
    { cName:"card 3", imgg:"../../assets/images/port3.png"},
    { cName:"card 4", imgg:"../../assets/images/poert1.png"},
    { cName:"card 5", imgg:"../../assets/images/port3.png"},
    { cName:"card 6", imgg:"../../assets/images/poert1.png"},

  ]
}
