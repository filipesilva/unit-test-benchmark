import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8900Component } from './my-comp-8900.component';

describe('MyComp8900Component', () => {
  let component: MyComp8900Component;
  let fixture: ComponentFixture<MyComp8900Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8900Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8900Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
