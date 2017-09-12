import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9679Component } from './my-comp-9679.component';

describe('MyComp9679Component', () => {
  let component: MyComp9679Component;
  let fixture: ComponentFixture<MyComp9679Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9679Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9679Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
