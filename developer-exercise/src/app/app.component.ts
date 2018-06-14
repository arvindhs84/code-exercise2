import { Component } from '@angular/core';

@Component({
  selector: '[code-app]',
  template: `
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="guide">Coding Exercise</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li><a routerLink="exercise-one">exercise one</a></li>
            <li><a routerLink="exercise-two">exercise two</a></li>
            <li><a routerLink="exercise-three">exercise three</a></li>
            <li><a routerLink="exercise-four">exercise four</a></li>
            <li><a routerLink="exercise-five">exercise five</a></li>
            <li><a routerLink="exercise-six">exercise six</a></li>
            <li><a href="test.html">Run Unit Tests</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
    <div class="container" style="margin-top: 50px;">
      <router-outlet></router-outlet>
    </div>`
})
export class AppComponent {
  title = 'app';
}
