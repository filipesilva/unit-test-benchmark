import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5267Component } from './my-comp-5267.component';

describe('MyComp5267Component', () => {
  let component: MyComp5267Component;
  let fixture: ComponentFixture<MyComp5267Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5267Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5267Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
