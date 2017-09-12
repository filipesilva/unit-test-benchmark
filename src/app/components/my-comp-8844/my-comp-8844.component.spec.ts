import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8844Component } from './my-comp-8844.component';

describe('MyComp8844Component', () => {
  let component: MyComp8844Component;
  let fixture: ComponentFixture<MyComp8844Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8844Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8844Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
