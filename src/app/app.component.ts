import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl;
  url;
  //TypeScript
  userName: string = "";

  ngOnInit(): void {
    this.title = "Hello from Bridgelabz.";
    this.imgUrl = "../assets/bridgelabz-news.png";
    this.url = "https://www.bridgelabz.com";
  }

  onClick($event){
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
  }
}