import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9492Component } from './my-comp-9492.component';

describe('MyComp9492Component', () => {
  let component: MyComp9492Component;
  let fixture: ComponentFixture<MyComp9492Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9492Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9492Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
