import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8513Component } from './my-comp-8513.component';

describe('MyComp8513Component', () => {
  let component: MyComp8513Component;
  let fixture: ComponentFixture<MyComp8513Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8513Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8513Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
