import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8060Component } from './my-comp-8060.component';

describe('MyComp8060Component', () => {
  let component: MyComp8060Component;
  let fixture: ComponentFixture<MyComp8060Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8060Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8060Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
