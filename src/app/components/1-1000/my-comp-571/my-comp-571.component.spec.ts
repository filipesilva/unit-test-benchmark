import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp571Component } from './my-comp-571.component';

describe('MyComp571Component', () => {
  let component: MyComp571Component;
  let fixture: ComponentFixture<MyComp571Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp571Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp571Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
