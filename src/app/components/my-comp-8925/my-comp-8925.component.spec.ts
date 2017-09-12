import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8925Component } from './my-comp-8925.component';

describe('MyComp8925Component', () => {
  let component: MyComp8925Component;
  let fixture: ComponentFixture<MyComp8925Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8925Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8925Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
