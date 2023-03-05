import { NgModule, OnChanges, OnInit, OnDestroy } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FlexModule } from '@angular/flex-layout'
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
//Materials
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
//App Routing and App Base Component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//------ Local Components ------
//Base Components of the app
import { HeaderComponent } from './components/header/header';
import { HomeComponent } from './components/home/home';
//How-to-Use
import { HowToUseComponent } from './components/how-to-use/how-to-use';
//Coming Next
import { ComingNextComponent } from './components/coming-next/coming-next';
//About the Scorecard
import { AboutTheScoreCardComponent } from './components/about-the-scorecard/about-the-scorecard';
//Data Table Components
import { DataTableComponent } from './components/data-table/data-table/data-table';
import { DataTableConfigurationUpdateComponent } from './components/data-table/data-table-configuration-update/data-table-configuration-update';
import { DataTableConfigurationMainComponent } from './components/data-table/data-table-configuration-main/data-table-configuration-main';
//frame-of-reference
import { FrameOfReferenceMainComponent } from './components/frame-of-reference/frame-of-reference-main/frame-of-reference-main';
import { FrameOfReferenceCreateComponent } from './components/frame-of-reference/frame-of-reference-create/frame-of-reference-create';
import { FrameOfReferenceReadComponent } from './components/frame-of-reference/frame-of-reference-read/frame-of-reference-read';
import { FrameOfReferenceUpdateComponent } from './components/frame-of-reference/frame-of-reference-update/frame-of-reference-update';
//profession-category
import { ProfessionCategoryMainComponent } from './components/profession-category/profession-category-main/profession-category-main';
import { ProfessionCategoryCreateComponent } from './components/profession-category/profession-category-create/profession-category-create';
import { ProfessionCategoryReadComponent } from './components/profession-category/profession-category-read/profession-category-read';
import { ProfessionCategoryUpdateComponent } from './components/profession-category/profession-category-update/profession-category-update';
//political-category
import { PoliticalCategoryMainComponent } from './components/political-category/political-category-main/political-category-main';
import { PoliticalCategoryCreateComponent } from './components/political-category/political-category-create/political-category-create';
import { PoliticalCategoryReadComponent } from './components/political-category/political-category-read/political-category-read';
import { PoliticalCategoryUpdateComponent } from './components/political-category/political-category-update/political-category-update';
//term-definition
import { TermDefinitionMainComponent } from './components/term-definition/term-definition-main/term-definition-main';
import { TermDefinitionCreateComponent } from './components/term-definition/term-definition-create/term-definition-create';
import { TermDefinitionReadComponent } from './components/term-definition/term-definition-read/term-definition-read';
import { TermDefinitionUpdateComponent } from './components/term-definition/term-definition-update/term-definition-update';
//term-instance
import { TermInstanceMainComponent } from './components/term-instance/term-instance-main/term-instance-main';
import { TermInstanceCreateComponent } from './components/term-instance/term-instance-create/term-instance-create';
import { TermInstanceReadComponent } from './components/term-instance/term-instance-read/term-instance-read';
import { TermInstanceUpdateComponent } from './components/term-instance/term-instance-update/term-instance-update';
//scoring-definition
import { ScoringDefinitionMainComponent } from './components/scoring-definition/scoring-definition-main/scoring-definition-main';
import { ScoringDefinitionCreateComponent } from './components/scoring-definition/scoring-definition-create/scoring-definition-create';
import { ScoringDefinitionReadComponent } from './components/scoring-definition/scoring-definition-read/scoring-definition-read';
import { ScoringDefinitionUpdateComponent } from './components/scoring-definition/scoring-definition-update/scoring-definition-update';
//scoring-instance
import { ScoringInstanceMainComponent } from './components/scoring-instance/scoring-instance-main/scoring-instance-main';
import { ScoringInstanceCreateComponent } from './components/scoring-instance/scoring-instance-create/scoring-instance-create';
import { ScoringInstanceReadComponent } from './components/scoring-instance/scoring-instance-read/scoring-instance-read';
import { ScoringInstanceUpdateComponent } from './components/scoring-instance/scoring-instance-update/scoring-instance-update';
//404 error page
import { PageNotFoundComponent } from './components/page-not-found/page-not-found';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HowToUseComponent,
    ComingNextComponent,
    AboutTheScoreCardComponent,
    PageNotFoundComponent,
    DataTableComponent,
    DataTableConfigurationMainComponent,
    DataTableConfigurationUpdateComponent,
    FrameOfReferenceMainComponent,
    FrameOfReferenceCreateComponent,
    FrameOfReferenceReadComponent,
    FrameOfReferenceUpdateComponent,
    ProfessionCategoryMainComponent,
    ProfessionCategoryCreateComponent,
    ProfessionCategoryReadComponent,
    ProfessionCategoryUpdateComponent,
    PoliticalCategoryMainComponent,
    PoliticalCategoryCreateComponent,
    PoliticalCategoryReadComponent,
    PoliticalCategoryUpdateComponent,
    TermDefinitionMainComponent,
    TermDefinitionCreateComponent,
    TermDefinitionReadComponent,
    TermDefinitionUpdateComponent,
    TermInstanceMainComponent,
    TermInstanceCreateComponent,
    TermInstanceReadComponent,
    TermInstanceUpdateComponent,
    ScoringDefinitionMainComponent,
    ScoringDefinitionCreateComponent,
    ScoringDefinitionReadComponent,
    ScoringDefinitionUpdateComponent,
    ScoringInstanceMainComponent,
    ScoringInstanceCreateComponent,
    ScoringInstanceReadComponent,
    ScoringInstanceUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatTooltipModule,
    MatTreeModule,
    MatButtonModule,
    MatDialogModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    MatCardModule
  ]
})
export class AppModule { }
