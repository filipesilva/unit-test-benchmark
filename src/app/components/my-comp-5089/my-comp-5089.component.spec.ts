import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5089Component } from './my-comp-5089.component';

describe('MyComp5089Component', () => {
  let component: MyComp5089Component;
  let fixture: ComponentFixture<MyComp5089Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5089Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5089Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
