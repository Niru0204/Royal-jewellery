import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ForherComponent } from './forher/forher.component';

export const routes: Routes = [
    { path: '', component: ProductComponent },
    { path: 'forher', component: ForherComponent }
];
