import { routes } from './routes';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

@NgModule({
    imports: [RouterModule.forRoot(routes, {
      useHash: true,
    })],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }