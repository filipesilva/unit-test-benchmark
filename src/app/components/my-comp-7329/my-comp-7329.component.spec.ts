import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7329Component } from './my-comp-7329.component';

describe('MyComp7329Component', () => {
  let component: MyComp7329Component;
  let fixture: ComponentFixture<MyComp7329Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7329Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7329Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
