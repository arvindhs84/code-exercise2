import { SafeHtmlPipe } from './safe-html.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { inject, TestBed } from '@angular/core/testing';
import {BrowserModule} from '@angular/platform-browser';


describe('SafeHtmlPipe', () => {

  let sanitize: DomSanitizer;

beforeEach(() => {
    TestBed
      .configureTestingModule({
        imports: [
          BrowserModule
        ]
      });
  });

  it('create an instance', inject([DomSanitizer], (domSanitizer: DomSanitizer)  => {
    const pipe = new SafeHtmlPipe(domSanitizer);
    expect(pipe).toBeTruthy();
  }));
});
