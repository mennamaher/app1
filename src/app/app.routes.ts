import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [

  {path: "", redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'portfolio', component:PortfolioComponent},
  {path:'contact', component:ContactsComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'**', component:NotFoundComponent},
];
