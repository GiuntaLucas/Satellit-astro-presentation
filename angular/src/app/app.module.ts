import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ScrollTopComponent } from './components/shared/scroll-top/scroll-top.component';
import { HeaderComponent } from './components/Home/header/header.component';
import { SpecialComponent } from './components/Home/special/special.component';
import { BannerComponent } from './components/Home/banner/banner.component';
import { BusinessExplanationComponent } from './components/Home/business-explanation/business-explanation.component';
import { BusinessExplanationSectionComponent } from './components/Home/business-explanation-section/business-explanation-section.component';
import { OpportunitiesComponent } from './components/Home/opportunities/opportunities.component';
import { OpportunityCardComponent } from './components/Home/opportunity-card/opportunity-card.component';
import { TalkHeaderComponent } from './components/Home/talk-header/talk-header.component';
import { LetsTalkComponent } from './components/Home/lets-talk/lets-talk.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LayoutComponent } from './components/shared/layout/layout.component';
import { SpecialCardComponent } from './components/Home/special-card/special-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ScrollTopComponent,
    HeaderComponent,
    SpecialComponent,
    BannerComponent,
    BusinessExplanationComponent,
    BusinessExplanationSectionComponent,
    OpportunitiesComponent,
    OpportunityCardComponent,
    TalkHeaderComponent,
    LetsTalkComponent,
    FooterComponent,
    LayoutComponent,
    SpecialCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
