import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { FeeComponent } from './fee/fee.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'course', component: CourseComponent },
  { path: 'fee', component: FeeComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true }) // <-- debugging purposes only)],
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
