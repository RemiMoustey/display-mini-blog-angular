import { Component } from '@angular/core';
import {Post} from './Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  posts: Post[] = [
    new Post("Mon premier post","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed no eiusmod tempor incidiunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"),
    new Post("Mon deuxième post","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed no eiusmod tempor incidiunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"),
    new Post("Encore un post", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed no eiusmod tempor incidiunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut allquip ex ea commodo")
  ];

  onLoveIt() {

  }
}
