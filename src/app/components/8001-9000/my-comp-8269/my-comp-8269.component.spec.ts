import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8269Component } from './my-comp-8269.component';

describe('MyComp8269Component', () => {
  let component: MyComp8269Component;
  let fixture: ComponentFixture<MyComp8269Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8269Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8269Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
