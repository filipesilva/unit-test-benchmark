import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8993Component } from './my-comp-8993.component';

describe('MyComp8993Component', () => {
  let component: MyComp8993Component;
  let fixture: ComponentFixture<MyComp8993Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8993Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8993Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
