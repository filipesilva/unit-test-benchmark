import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9964Component } from './my-comp-9964.component';

describe('MyComp9964Component', () => {
  let component: MyComp9964Component;
  let fixture: ComponentFixture<MyComp9964Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9964Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9964Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
