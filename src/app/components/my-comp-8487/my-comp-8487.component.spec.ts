import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8487Component } from './my-comp-8487.component';

describe('MyComp8487Component', () => {
  let component: MyComp8487Component;
  let fixture: ComponentFixture<MyComp8487Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8487Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8487Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
