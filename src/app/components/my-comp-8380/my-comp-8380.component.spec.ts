import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8380Component } from './my-comp-8380.component';

describe('MyComp8380Component', () => {
  let component: MyComp8380Component;
  let fixture: ComponentFixture<MyComp8380Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8380Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8380Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
