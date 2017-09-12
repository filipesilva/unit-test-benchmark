import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7164Component } from './my-comp-7164.component';

describe('MyComp7164Component', () => {
  let component: MyComp7164Component;
  let fixture: ComponentFixture<MyComp7164Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7164Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7164Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
