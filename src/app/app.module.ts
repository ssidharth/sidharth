
import { ClassService } from './service/class.service';
import { ClassComponent } from './class.component';
import { NamesArrayComponent } from './names.component';
import { BookService } from './service/book.service';
import { BookComponent } from './book.component';
import { AuthorComponent } from './author-component';
import { AuthorService } from './service/author.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NameService } from './service/name.service';
import { AttributedemoComponent } from './attributedemo/attributedemo.component';
import { ClassbindingattribComponent } from './classbindingattrib/classbindingattrib.component';
import { ClickdemoComponent } from './clickdemo/clickdemo.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TemplatevariComponent } from './templatevari/templatevari.component';
import { AngularbindingComponent } from './angularbinding/angularbinding.component';
// import { ClassbindingComponent } from './classbinding/classbinding.component';

import { Prac2Component } from './prac2/prac2.component';
import { PipesComponent } from './pipes/pipes.component';

import { SummaryPipePipe } from './summary-pipe.pipe';
import { TitlecasePipePipe } from './custompipe2/titlecase-pipe.pipe';
import { LikeComponentComponent } from './like-component/like-component.component';
import { ParentlikecompoComponent } from './parentlikecompo/parentlikecompo.component';
import { PipeproperPipe } from './pipes/pipeproper.pipe';
import { Like2Component } from './like2/like2.component';
import { Likeparent2Component } from './likeparent2/likeparent2.component';
import { NgClassBindingComponent } from './ng-class-binding/ng-class-binding.component';
import { OutputComponent } from './output/output.component';
import { ParentoutputComponent } from './parentoutput/parentoutput.component';
import { NgcontentComponent } from './ngcontent/ngcontent.component';
import { PracChildComponent } from './prac-child/prac-child.component';
import { InbuildstructuraldirecComponent } from './inbuildstructuraldirec/inbuildstructuraldirec.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { InbuildDirectivesComponent } from './inbuild-directives/inbuild-directives.component';
import { InbuildDrectiveDirective } from './inbuild-drective.directive';
import { Ngswitch2Component } from './ngswitch2/ngswitch2.component';
// import { Switch3Component } from './switch3/switch3.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { InbuildDirective2Directive } from './inbuild-directive2.directive';
import { TemplatedrivenFormComponent } from './templatedriven-form/templatedriven-form.component';
import { Clickdemo2Component } from './clickdemo2/clickdemo2.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { ReactiveComponent } from './reactive/reactive.component';



@NgModule({
  declarations: [
    AppComponent,AuthorComponent,
    BookComponent,NamesArrayComponent,ClassComponent, 
    AttributedemoComponent, ClassbindingattribComponent, 
    ClickdemoComponent, FavoriteComponent, TemplatevariComponent,
     AngularbindingComponent, Prac2Component, PipesComponent, 
      SummaryPipePipe, LikeComponentComponent,
      TitlecasePipePipe, ParentlikecompoComponent, PipeproperPipe, 
      Like2Component, Likeparent2Component, NgClassBindingComponent,
       OutputComponent, ParentoutputComponent, NgcontentComponent, 
       PracChildComponent, InbuildstructuraldirecComponent, NgswitchComponent,
        InbuildDirectivesComponent, InbuildDrectiveDirective, 
        Ngswitch2Component, NgforComponent,
         InbuildDirective2Directive,InbuildDirective2Directive, TemplatedrivenFormComponent, Clickdemo2Component, ReactiveformComponent, BootstrapComponent, ReactiveComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule

  ],
  providers: [AuthorService,BookService,NameService,ClassService],
  bootstrap: [AppComponent]
})
export class AppModule { }
