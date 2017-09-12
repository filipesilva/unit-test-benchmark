import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9334Component } from './my-comp-9334.component';

describe('MyComp9334Component', () => {
  let component: MyComp9334Component;
  let fixture: ComponentFixture<MyComp9334Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9334Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9334Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
