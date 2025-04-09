import { leadingComment } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmsComponent } from './components/cms/cms.component';
import { LeadingComponent } from './components/leading/leading.component';

const routes: Routes = [

  { path: 'leading', component: LeadingComponent },
  { path: 'cms', component: CmsComponent },
  { path: '**', redirectTo: '' } // Redirect unknown paths to landing
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
