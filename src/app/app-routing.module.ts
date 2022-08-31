import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './website/components/layout/layout.component';
import { CategoryComponent } from './website/pages/category/category.component';
import { HomeComponent } from './website/pages/home/home.component';
import { NotFoundComponent } from './website/pages/not-found/not-found.component';
import { ProductDetailComponent } from './website/pages/product-detail/product-detail.component';

// {
//   path: '',
//   redirectTo: '/home',
//   pathMatch: 'full'
// },

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'category/:id',
        component: CategoryComponent,
      },
      {
        path: 'product/:id',
        component: ProductDetailComponent,
      },
    ]
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
