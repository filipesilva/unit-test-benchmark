import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2780Component } from './my-comp-2780.component';

describe('MyComp2780Component', () => {
  let component: MyComp2780Component;
  let fixture: ComponentFixture<MyComp2780Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2780Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2780Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
