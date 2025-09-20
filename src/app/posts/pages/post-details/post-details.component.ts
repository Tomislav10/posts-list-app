import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-post-details',
  standalone: true,
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostDetailsComponent {}


