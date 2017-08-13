import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';


//PAGE-level component from generator
import { ProtectedLazyHomeComponent } from './pages/home';
import { RouterModule, Routes, Router,PreloadAllModules} from '@angular/router';

const appRoutes: Routes = [
//ROUTE genenration pathsyntax
  {
    path: '',
    component: ProtectedLazyHomeComponent
  }

];

@NgModule({
  imports: [ 
    CommonModule, 
    FormsModule,
    //lazy module sub routing 
    RouterModule.forChild(
      appRoutes
    )
  ],
  declarations: [
   
    ProtectedLazyHomeComponent,
    //PAGE-level component_declaration from generator
    //root level component
    
  ],
})
export class ProtectedLazyModule { }


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/