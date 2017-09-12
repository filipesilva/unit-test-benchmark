import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8739Component } from './my-comp-8739.component';

describe('MyComp8739Component', () => {
  let component: MyComp8739Component;
  let fixture: ComponentFixture<MyComp8739Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8739Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8739Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
