import { Component, Input } from '@angular/core';

@Component({
    selector: 'slide',
    templateUrl: 'slide.html'
})
export class Slide {
    @Input() slides: any[];
    slide1visibility: boolean = true;
    slide2visibility: boolean;
    slide3visibility: boolean;
    slide4visibility: boolean;

    onSelect(value: string) {
        
        this.onDeSelect();
        switch (value) {
            case 'Slide1':
                this.slide1visibility = true;   
                break;
            case 'Slide2':
                this.slide2visibility = true;   
                break;
            case 'Slide3':
                this.slide3visibility = true;   
                break;
            case 'Slide4':
                this.slide4visibility = true;   
                break;
            default:
                break;
        }
    
    }

    onDeSelect() {
        
        this.slide1visibility = false;
        this.slide2visibility = false;
        this.slide3visibility = false;
        this.slide4visibility = false;
    }
}
