import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp505Component } from './my-comp-505.component';

describe('MyComp505Component', () => {
  let component: MyComp505Component;
  let fixture: ComponentFixture<MyComp505Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp505Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp505Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
