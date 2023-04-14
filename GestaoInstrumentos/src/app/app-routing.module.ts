import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroListComponent } from 'src/cadastro/cadastro-list/cadastro-list.component';
import { CadastroViewComponent } from 'src/cadastro/cadastro-view/cadastro-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cadastro',
    pathMatch: 'full'
  },
  {
    path: 'cadastro',
    children: [
      {
        path: '',
        component: CadastroListComponent
      },
      {
        path: 'view',
        component: CadastroViewComponent
      },
    ],
  },
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
