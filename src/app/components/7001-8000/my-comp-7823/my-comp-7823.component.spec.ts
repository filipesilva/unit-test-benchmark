import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7823Component } from './my-comp-7823.component';

describe('MyComp7823Component', () => {
  let component: MyComp7823Component;
  let fixture: ComponentFixture<MyComp7823Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7823Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7823Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
