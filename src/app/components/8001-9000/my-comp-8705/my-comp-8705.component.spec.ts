import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8705Component } from './my-comp-8705.component';

describe('MyComp8705Component', () => {
  let component: MyComp8705Component;
  let fixture: ComponentFixture<MyComp8705Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8705Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8705Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
