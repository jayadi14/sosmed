import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '',
    component: AppComponent,
    children:[
      {
        path:'',
        loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
      },
    ]
  },
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration : 'enabled',
  anchorScrolling: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
