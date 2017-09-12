import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5867Component } from './my-comp-5867.component';

describe('MyComp5867Component', () => {
  let component: MyComp5867Component;
  let fixture: ComponentFixture<MyComp5867Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5867Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5867Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
