import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreatedAt: Date;

  constructor() { }

  ngOnInit(): void {
  }

  onLoveIts() {
    this.postLoveIts++;
  }

  onDontLoveIts() {
    this.postLoveIts--;
  }

  getColor() {
    if(this.postLoveIts < 0) {
      return "#98403f";
    } else if(this.postLoveIts > 0) {
      return "#557c3d";
    }
  }
}
