import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8130Component } from './my-comp-8130.component';

describe('MyComp8130Component', () => {
  let component: MyComp8130Component;
  let fixture: ComponentFixture<MyComp8130Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8130Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8130Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
