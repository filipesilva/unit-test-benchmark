import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5552Component } from './my-comp-5552.component';

describe('MyComp5552Component', () => {
  let component: MyComp5552Component;
  let fixture: ComponentFixture<MyComp5552Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5552Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5552Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
