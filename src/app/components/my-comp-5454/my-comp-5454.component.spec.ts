import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5454Component } from './my-comp-5454.component';

describe('MyComp5454Component', () => {
  let component: MyComp5454Component;
  let fixture: ComponentFixture<MyComp5454Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5454Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5454Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
