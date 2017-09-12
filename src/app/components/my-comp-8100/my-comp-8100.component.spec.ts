import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8100Component } from './my-comp-8100.component';

describe('MyComp8100Component', () => {
  let component: MyComp8100Component;
  let fixture: ComponentFixture<MyComp8100Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8100Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
