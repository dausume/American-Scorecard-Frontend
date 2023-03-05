import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home';

import { HowToUseComponent }from './components/how-to-use/how-to-use'

import { ComingNextComponent } from './components/coming-next/coming-next';

import { AboutTheScoreCardComponent } from './components/about-the-scorecard/about-the-scorecard';

import { PoliticalCategoryMainComponent } from './components/political-category/political-category-main/political-category-main';
import { PoliticalCategoryCreateComponent } from './components/political-category/political-category-create/political-category-create';
import { PoliticalCategoryReadComponent } from './components/political-category/political-category-read/political-category-read';
import { PoliticalCategoryUpdateComponent } from './components/political-category/political-category-update/political-category-update';

import { TermDefinitionMainComponent } from './components/term-definition/term-definition-main/term-definition-main';
import { TermDefinitionCreateComponent } from './components/term-definition/term-definition-create/term-definition-create';
import { TermDefinitionReadComponent } from './components/term-definition/term-definition-read/term-definition-read';
import { TermDefinitionUpdateComponent } from './components/term-definition/term-definition-update/term-definition-update';

import { TermInstanceMainComponent } from './components/term-instance/term-instance-main/term-instance-main';
import { TermInstanceCreateComponent } from './components/term-instance/term-instance-create/term-instance-create';
import { TermInstanceReadComponent } from './components/term-instance/term-instance-read/term-instance-read';
import { TermInstanceUpdateComponent } from './components/term-instance/term-instance-update/term-instance-update';

import { ProfessionCategoryMainComponent } from './components/profession-category/profession-category-main/profession-category-main';
import { ProfessionCategoryReadComponent } from './components/profession-category/profession-category-read/profession-category-read';
import { ProfessionCategoryCreateComponent } from './components/profession-category/profession-category-create/profession-category-create';
import { ProfessionCategoryUpdateComponent } from './components/profession-category/profession-category-update/profession-category-update';

import { FrameOfReferenceMainComponent } from './components/frame-of-reference/frame-of-reference-main/frame-of-reference-main';
import { FrameOfReferenceCreateComponent } from './components/frame-of-reference/frame-of-reference-create/frame-of-reference-create';
import { FrameOfReferenceReadComponent } from './components/frame-of-reference/frame-of-reference-read/frame-of-reference-read';
import { FrameOfReferenceUpdateComponent } from './components/frame-of-reference/frame-of-reference-update/frame-of-reference-update';

import { ScoringInstanceMainComponent }  from './components/scoring-instance/scoring-instance-main/scoring-instance-main';
import { ScoringInstanceCreateComponent }  from './components/scoring-instance/scoring-instance-create/scoring-instance-create';
import { ScoringInstanceReadComponent }  from './components/scoring-instance/scoring-instance-read/scoring-instance-read';
import { ScoringInstanceUpdateComponent }  from './components/scoring-instance/scoring-instance-update/scoring-instance-update';

import { ScoringDefinitionMainComponent } from './components/scoring-definition/scoring-definition-main/scoring-definition-main';
import { ScoringDefinitionCreateComponent } from './components/scoring-definition/scoring-definition-create/scoring-definition-create';
import { ScoringDefinitionReadComponent } from './components/scoring-definition/scoring-definition-read/scoring-definition-read';
import { ScoringDefinitionUpdateComponent } from './components/scoring-definition/scoring-definition-update/scoring-definition-update';

import { DataTableConfigurationUpdateComponent } from './components/data-table/data-table-configuration-update/data-table-configuration-update';
import { DataTableConfigurationMainComponent } from './components/data-table/data-table-configuration-main/data-table-configuration-main';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found';

const routes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'how-to-use', component: HowToUseComponent},
  {path : 'coming-next', component: ComingNextComponent},
  {path : 'about-the-scorecard', component: AboutTheScoreCardComponent},
  {path : 'config-tables',
  children: [
    {
      path : '',
      component: DataTableConfigurationMainComponent,
    },
    {
      path : 'update',
      component: DataTableConfigurationUpdateComponent,
    },
  ]
  },
  {
    path : 'profession-category',
    children: [
      {
        path : '',
        component: ProfessionCategoryMainComponent,
      },
      {
        path: "read",
        component: ProfessionCategoryReadComponent
      },
      {
        path: "create",
        component: ProfessionCategoryCreateComponent
      },
      {
        path: "update",
        component: ProfessionCategoryUpdateComponent
      }
    ] 
  },
  {
    path : 'frame-of-reference',
    children: [
      {
        path : '',
        component: FrameOfReferenceMainComponent,
      },
      {
        path: "read",
        component: FrameOfReferenceReadComponent
      },
      {
        path: "create",
        component: FrameOfReferenceCreateComponent
      },
      {
        path: "update",
        component: FrameOfReferenceUpdateComponent
      }
    ] 
  },
  {
    path : 'political-category',
    children: [
      {
        path : '',
        component: PoliticalCategoryMainComponent,
      },
      {
        path: "read",
        component: PoliticalCategoryReadComponent
      },
      {
        path: "create",
        component: PoliticalCategoryCreateComponent
      },
      {
        path: "update",
        component: PoliticalCategoryUpdateComponent
      }
    ] 
  },
  {
    path : 'term-definition',
    children: [
      {
        path: "",
        component: TermDefinitionMainComponent
      },
      {
        path: "create",
        component: TermDefinitionCreateComponent
      },
      {
        path: "read",
        component: TermDefinitionReadComponent
      },
      {
        path: "update",
        component: TermDefinitionUpdateComponent
      },
    ]
  },
  {
    path : 'term-instance',
    children: [
      {
        path: "",
        component: TermInstanceMainComponent
      },
      {
        path: "create",
        component: TermInstanceCreateComponent
      },
      {
        path: "read",
        component: TermInstanceReadComponent
      },
      {
        path: "update",
        component: TermInstanceUpdateComponent
      },
    ]
  },
  {
    path : 'scoring-instance',
    children: [
      {
        path : '', 
        component: ScoringInstanceMainComponent,
      },
      {
        path: "create",
        component: ScoringInstanceCreateComponent
      },
      {
        path: "read",
        component: ScoringInstanceReadComponent
      },
      {
        path: "update",
        component: ScoringInstanceUpdateComponent
      },
    ]
  },
  {
    path : 'scoring-definition',
    children: [
      {
        path : '', 
        component: ScoringDefinitionMainComponent,
      },
      {
        path: "create",
        component: ScoringDefinitionCreateComponent
      },
      {
        path: "read",
        component: ScoringDefinitionReadComponent
      },
      {
        path: "update",
        component: ScoringDefinitionUpdateComponent
      },
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
