import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Location } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppLayoutComponent {
  private readonly router = inject(Router);
  private readonly location = inject(Location);

  readonly $subtitle = toSignal(
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      startWith(null),
      map(() => {
        let s = this.router.routerState.snapshot.root;
        while (s.firstChild) s = s.firstChild;
        return (s.data?.['subtitle'] as string) ?? 'Posts';
      }),
    ),
  );

  readonly showBack = toSignal(
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      startWith(null),
      map(
        () =>
          this.router.url.startsWith('/posts/') && this.router.url !== '/posts',
      ),
    ),
  );

  back(): void {
    if (history.length > 1) this.location.back();
    else this.router.navigate(['/posts']);
  }
}
