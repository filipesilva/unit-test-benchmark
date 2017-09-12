import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp746Component } from './my-comp-746.component';

describe('MyComp746Component', () => {
  let component: MyComp746Component;
  let fixture: ComponentFixture<MyComp746Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp746Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp746Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
