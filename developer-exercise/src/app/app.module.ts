import { Guide } from './guide';
import { ExerciseSix } from './exercise.six';
import { ClickGlobal } from './click.global';
import { ExerciseFive } from './exercise.five';
import { NgHide } from './ng.hide';
import { ExerciseFour } from './exercise.four';
import { Address } from './address';
import { ExerciseThree } from './exercise.three';
import { ExerciseTwo } from './exercise.two';
import { Api } from './api';
import { SlideContainer } from './slide.container';
import { Slide } from './slide';
import { ExerciseOne } from './exercise.one';
import { routes } from './routes';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {CacheManager} from './CacheManager';
import { SsnformatterDirective } from './ssnformatter.directive';
import { TestssnformatterComponent } from './testssnformatter/testssnformatter.component';
import { SafeHtmlPipe } from './safe-html.pipe';
import { RadiogroupComponent } from './radiogroup/radiogroup.component';
import { ExerciseGuardService } from './exercise-guard.service';



@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes), CommonModule, HttpModule,HttpClientModule],
    declarations: [AppComponent, ExerciseOne, SlideContainer, Slide, ExerciseTwo, ExerciseThree, Address, ExerciseFour, NgHide, ExerciseFive, ClickGlobal, ExerciseSix, Guide, SsnformatterDirective, TestssnformatterComponent, SafeHtmlPipe, RadiogroupComponent],
    entryComponents: [ExerciseOne, SlideContainer, Slide, ExerciseTwo, ExerciseThree, Address, ExerciseFour, ExerciseFive, ClickGlobal, ExerciseSix, Guide],
    providers: [Api, CacheManager, ExerciseGuardService],
    bootstrap: [AppComponent],
})
export class AppModule {}
