import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp834Component } from './my-comp-834.component';

describe('MyComp834Component', () => {
  let component: MyComp834Component;
  let fixture: ComponentFixture<MyComp834Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp834Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp834Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
