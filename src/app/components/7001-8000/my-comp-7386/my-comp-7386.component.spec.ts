import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7386Component } from './my-comp-7386.component';

describe('MyComp7386Component', () => {
  let component: MyComp7386Component;
  let fixture: ComponentFixture<MyComp7386Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7386Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7386Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
