import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const URLGlb = 'http://localhost:5001/remoteEntry.js';
const URLEdu = 'http://localhost:5002/remoteEntry.js';

export const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'globais',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: URLGlb,
        exposedModule: './Module',
      }).then((m) => m.InteropModule),
  },
  {
    path: 'educacional',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: URLEdu,
        exposedModule: './Module',
      }).then((m) => m.InteropModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
