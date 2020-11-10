import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZooRepoService } from './services/zoo-repo.service';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ZooContainerComponent } from './components/zoo-container/zoo-container.component';
import { AnimalsListComponent } from './components/animals-list/animals-list.component';
import { ZookeepersListComponent } from './components/zookeepers-list/zookeepers-list.component';
import { AddAnimalFormComponent } from './components/add-animal-form/add-animal-form.component';
import { AddAnimalFormTempComponent } from './components/add-animal-form-temp/add-animal-form-temp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    ZooContainerComponent,
    AnimalsListComponent,
    ZookeepersListComponent,
    AddAnimalFormComponent,
    AddAnimalFormTempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ZooRepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
