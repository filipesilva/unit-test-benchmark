import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8261Component } from './my-comp-8261.component';

describe('MyComp8261Component', () => {
  let component: MyComp8261Component;
  let fixture: ComponentFixture<MyComp8261Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8261Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8261Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
