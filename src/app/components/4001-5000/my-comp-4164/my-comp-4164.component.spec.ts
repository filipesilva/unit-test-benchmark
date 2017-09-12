import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4164Component } from './my-comp-4164.component';

describe('MyComp4164Component', () => {
  let component: MyComp4164Component;
  let fixture: ComponentFixture<MyComp4164Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4164Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4164Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
