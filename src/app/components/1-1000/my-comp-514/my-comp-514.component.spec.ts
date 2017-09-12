import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp514Component } from './my-comp-514.component';

describe('MyComp514Component', () => {
  let component: MyComp514Component;
  let fixture: ComponentFixture<MyComp514Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp514Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp514Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
