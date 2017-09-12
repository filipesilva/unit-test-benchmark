import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7059Component } from './my-comp-7059.component';

describe('MyComp7059Component', () => {
  let component: MyComp7059Component;
  let fixture: ComponentFixture<MyComp7059Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7059Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7059Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
