import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8771Component } from './my-comp-8771.component';

describe('MyComp8771Component', () => {
  let component: MyComp8771Component;
  let fixture: ComponentFixture<MyComp8771Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8771Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8771Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
