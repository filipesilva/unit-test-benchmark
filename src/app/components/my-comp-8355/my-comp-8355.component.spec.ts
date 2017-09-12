import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8355Component } from './my-comp-8355.component';

describe('MyComp8355Component', () => {
  let component: MyComp8355Component;
  let fixture: ComponentFixture<MyComp8355Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8355Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8355Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
