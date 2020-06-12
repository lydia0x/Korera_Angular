import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { FormulaComponent } from './formula/formula.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResourceComponent } from './resource/resource.component';
import { TemplateComponent } from './template/template.component';
import { AuthGuard } from './auth.guard';

const routes: Routes =[
    {
        path: '', redirectTo: '/home', pathMatch: 'full', canActivate: [AuthGuard]
    },

    {
        path: 'home', component: HomeComponent, canActivate: [AuthGuard]
    },

    {
        path: 'register', component: RegisterComponent
    },

    {
        path: 'login', component: LoginComponent
    },

    {
        path: 'resource', component: ResourceComponent, canActivate: [AuthGuard]
    },

    {
        path: 'project', component: ProjectComponent, canActivate: [AuthGuard]
    },

    {
        path: 'formula', component: FormulaComponent, canActivate: [AuthGuard]
    },

    {
        path: 'template', component: TemplateComponent, canActivate: [AuthGuard]
    },

    {
        path: '**', redirectTo: '', canActivate: [AuthGuard]
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}