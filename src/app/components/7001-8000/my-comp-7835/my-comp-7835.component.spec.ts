import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7835Component } from './my-comp-7835.component';

describe('MyComp7835Component', () => {
  let component: MyComp7835Component;
  let fixture: ComponentFixture<MyComp7835Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7835Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7835Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
