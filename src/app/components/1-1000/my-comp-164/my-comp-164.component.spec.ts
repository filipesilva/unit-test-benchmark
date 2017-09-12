import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp164Component } from './my-comp-164.component';

describe('MyComp164Component', () => {
  let component: MyComp164Component;
  let fixture: ComponentFixture<MyComp164Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp164Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp164Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
