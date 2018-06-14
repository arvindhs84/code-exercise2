import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SsnformatterDirective } from '../ssnformatter.directive';
import { TestssnformatterComponent } from './testssnformatter.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Test ssnformatter', () => {
  let component: TestssnformatterComponent;
  let fixture: ComponentFixture<TestssnformatterComponent>;
  // tslint:disable-next-line:prefer-const
  let inputEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestssnformatterComponent, SsnformatterDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestssnformatterComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('input'));
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('blur out input 123', () => {
    inputEl.nativeElement.value = '123';
    inputEl.triggerEventHandler('blur', null);
    fixture.detectChanges();
    expect(inputEl.nativeElement.value).toBe('123');
  });

  it('blur out input 1234', () => {
    inputEl.nativeElement.value = '1234';
    inputEl.triggerEventHandler('blur', null);
    fixture.detectChanges();
    expect(inputEl.nativeElement.value).toBe('123-4');
  });

  it('blur out input 12345', () => {
    inputEl.nativeElement.value = '12345';
    inputEl.triggerEventHandler('blur', null);
    fixture.detectChanges();
    expect(inputEl.nativeElement.value).toBe('123-45');
  });

  it('blur out input 123456', () => {
    inputEl.nativeElement.value = '123456';
    inputEl.triggerEventHandler('blur', null);
    fixture.detectChanges();
    expect(inputEl.nativeElement.value).toBe('123-45-6');
  });

  it('blur out input 1234567', () => {
    inputEl.nativeElement.value = '1234567';
    inputEl.triggerEventHandler('blur', null);
    fixture.detectChanges();
    expect(inputEl.nativeElement.value).toBe('123-45-67');
  });


  it('blur out input 12345678', () => {
    inputEl.nativeElement.value = '12345678';
    inputEl.triggerEventHandler('blur', null);
    fixture.detectChanges();
    expect(inputEl.nativeElement.value).toBe('123-45-678');
  });


  it('blur out input 123456789', () => {
    inputEl.nativeElement.value = '123456789';
    inputEl.triggerEventHandler('blur', null);
    fixture.detectChanges();
    expect(inputEl.nativeElement.value).toBe('123-45-6789');
  });
  // key up test cases
  it('keyup input 123', () => {
    inputEl.nativeElement.value = '123';
    inputEl.triggerEventHandler('keyup', null);
    fixture.detectChanges();
    expect(inputEl.nativeElement.value).toBe('123');
  });

  it('keyup input 1234', () => {
    inputEl.nativeElement.value = '1234';
    inputEl.triggerEventHandler('keyup', null);
    fixture.detectChanges();
    expect(inputEl.nativeElement.value).toBe('123-4');
  });

  it('keyup input 12345', () => {
    inputEl.nativeElement.value = '12345';
    inputEl.triggerEventHandler('keyup', null);
    fixture.detectChanges();
    expect(inputEl.nativeElement.value).toBe('123-45');
  });

  it('keyup input 123456', () => {
    inputEl.nativeElement.value = '123456';
    inputEl.triggerEventHandler('keyup', null);
    fixture.detectChanges();
    expect(inputEl.nativeElement.value).toBe('123-45-6');
  });

  it('keyup input 1234567', () => {
    inputEl.nativeElement.value = '1234567';
    inputEl.triggerEventHandler('keyup', null);
    fixture.detectChanges();
    expect(inputEl.nativeElement.value).toBe('123-45-67');
  });


  it('keyup input 12345678', () => {
    inputEl.nativeElement.value = '12345678';
    inputEl.triggerEventHandler('keyup', null);
    fixture.detectChanges();
    expect(inputEl.nativeElement.value).toBe('123-45-678');
  });


  it('keyup input 123456789', () => {
    inputEl.nativeElement.value = '123456789';
    inputEl.triggerEventHandler('keyup', null);
    fixture.detectChanges();
    expect(inputEl.nativeElement.value).toBe('123-45-6789');
  });
});
