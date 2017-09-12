import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8304Component } from './my-comp-8304.component';

describe('MyComp8304Component', () => {
  let component: MyComp8304Component;
  let fixture: ComponentFixture<MyComp8304Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8304Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8304Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
