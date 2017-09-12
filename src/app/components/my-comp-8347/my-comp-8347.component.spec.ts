import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8347Component } from './my-comp-8347.component';

describe('MyComp8347Component', () => {
  let component: MyComp8347Component;
  let fixture: ComponentFixture<MyComp8347Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8347Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8347Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
