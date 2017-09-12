import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8069Component } from './my-comp-8069.component';

describe('MyComp8069Component', () => {
  let component: MyComp8069Component;
  let fixture: ComponentFixture<MyComp8069Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8069Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8069Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
