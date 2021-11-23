import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss']
})
export class HomeCardComponent implements OnInit {

  @Input() title!: string;
  @Input() routeLink!: string;
  @Input() imagePath!: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onCardClick() {
    this.router.navigate([this.routeLink]);
  }

}
