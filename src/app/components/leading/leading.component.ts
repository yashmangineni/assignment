import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-leading',
  templateUrl: './leading.component.html',
  styleUrls: ['./leading.component.css']
})
export class LeadingComponent {

  headingText: string = '';
  constructor(private service:ServiceService){}
  ngOnInit(): void {
    this.service.getHeading().subscribe({
      next: (data) => {
        this.headingText = data.content;
      },
      error: (err) => {
        console.error('Error fetching heading:', err);
        this.headingText = 'Error loading heading.';
      }
    });
  }

  showContent: boolean = false;

  toggleContent() {
    this.showContent = !this.showContent;
  }
}
