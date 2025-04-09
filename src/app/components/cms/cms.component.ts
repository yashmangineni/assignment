import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.css']
})
export class CmsComponent {
  heading: string = '';
  loading: boolean = false;
  successMessage: string = '';
  constructor(private service:ServiceService){}

  updateHeading() {
    if (!this.heading.trim()) return;

    this.loading = true;
    this.successMessage = '';

    this.service.updateHeading(this.heading).subscribe({
      next: () => {
        this.successMessage = 'Heading updated successfully!';
        this.loading = false;
      },
      error: (err) => {
        console.error('Error updating heading:', err);
        this.loading = false;
      }
    });
  }
}
