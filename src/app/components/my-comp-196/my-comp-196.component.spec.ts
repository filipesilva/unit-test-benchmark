import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp196Component } from './my-comp-196.component';

describe('MyComp196Component', () => {
  let component: MyComp196Component;
  let fixture: ComponentFixture<MyComp196Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp196Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp196Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
