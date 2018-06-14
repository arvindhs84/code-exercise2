import { Slide } from './slide';
import { Component, Input, ContentChildren, QueryList } from '@angular/core';

@Component({
    selector: 'slide-container',
    template: `
        <slide [slides] = "pages">
        <div slide1>
            <div class="red">I am slide 1 and I am selected</div>
            <div>I am slide 2 and I am not selected</div>
            <div>I am slide 3 and I am not selected</div>
            <div>I am slide 4 and I am not selected</div>
        </div>
        <div slide2>
            <div >I am slide 1 and I am not selected</div>
            <div class="red">I am slide 2 and I am selected</div>
            <div>I am slide 3 and I am not selected</div>
            <div>I am slide 4 and I am not selected</div>
        </div>
        <div slide3>
            <div >I am slide 1 and I am not selected</div>
            <div>I am slide 2 and I am not selected</div>
            <div  class="red">I am slide 3 and I am selected</div>
            <div>I am slide 4 and I am not selected</div>
        </div>
        <div slide4>
            <div >I am slide 1 and I am not selected</div>
            <div>I am slide 2 and I am not selected</div>
            <div>I am slide 3 and I am not selected</div>
            <div class="red">I am slide 4 and I am selected</div>
        </div>
        </slide>
  `,
  styles: [
      'display: block;',
      'width: 100%'
  ]
})
export class SlideContainer {
    pages: any[] = [
        {
          'title': 'Slide1',
          'id': '1'
        },
        {
            'title': 'Slide2',
            'id': '2'
        },
        {
            'title': 'Slide3',
            'id': '3'
          },
          {
              'title': 'Slide4',
              'id': '4'
          }
    ];
}
