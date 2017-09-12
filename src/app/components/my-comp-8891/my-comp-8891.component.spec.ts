import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8891Component } from './my-comp-8891.component';

describe('MyComp8891Component', () => {
  let component: MyComp8891Component;
  let fixture: ComponentFixture<MyComp8891Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8891Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8891Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
