import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Header } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { ZooService } from './services/zoo.service';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ZooContainerComponent } from './components/zoo-container/zoo-container.component';
import { AnimalsListComponent } from './components/animals-list/animals-list.component';
import { ZookeepersListComponent } from './components/zookeepers-list/zookeepers-list.component';
import { AddAnimalFormComponent } from './components/add-animal-form/add-animal-form.component';

@NgModule({
  declarations: [
    AppComponent,
    Header,
    NavigationComponent,
    ZooContainerComponent,
    AnimalsListComponent,
    ZookeepersListComponent,
    AddAnimalFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ZooService],
  bootstrap: [AppComponent]
})
export class AppModule { }
