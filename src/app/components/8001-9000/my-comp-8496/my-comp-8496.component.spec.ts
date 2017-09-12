import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8496Component } from './my-comp-8496.component';

describe('MyComp8496Component', () => {
  let component: MyComp8496Component;
  let fixture: ComponentFixture<MyComp8496Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8496Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8496Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
