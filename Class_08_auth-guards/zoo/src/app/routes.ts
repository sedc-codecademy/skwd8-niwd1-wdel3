import { Routes } from '@angular/router';
import { AddAnimalFormComponent } from './components/add-animal-form/add-animal-form.component';
import { AnimalsListComponent } from './components/animals-list/animals-list.component';
import { ZookeepersListComponent } from './components/zookeepers-list/zookeepers-list.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

export const routes: Routes = [
    {
        path: 'animals',
        component: AnimalsListComponent,
    },
    {
        path: 'zookeepers',
        component: ZookeepersListComponent
    },
    {
        path: 'add-animal',
        component: AddAnimalFormComponent
    },
    {
        path: 'not-found',
        component: NotFoundComponent
    },
    {
        path: '',
        redirectTo: '/animals',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/not-found',
        pathMatch: 'full'
    },
]