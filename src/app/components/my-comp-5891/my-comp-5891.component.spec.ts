import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5891Component } from './my-comp-5891.component';

describe('MyComp5891Component', () => {
  let component: MyComp5891Component;
  let fixture: ComponentFixture<MyComp5891Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5891Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5891Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
