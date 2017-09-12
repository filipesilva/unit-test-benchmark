import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8599Component } from './my-comp-8599.component';

describe('MyComp8599Component', () => {
  let component: MyComp8599Component;
  let fixture: ComponentFixture<MyComp8599Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8599Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8599Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
