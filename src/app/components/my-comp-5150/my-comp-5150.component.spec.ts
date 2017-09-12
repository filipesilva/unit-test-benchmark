import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5150Component } from './my-comp-5150.component';

describe('MyComp5150Component', () => {
  let component: MyComp5150Component;
  let fixture: ComponentFixture<MyComp5150Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5150Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5150Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
