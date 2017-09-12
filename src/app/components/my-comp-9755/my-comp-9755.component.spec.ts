import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9755Component } from './my-comp-9755.component';

describe('MyComp9755Component', () => {
  let component: MyComp9755Component;
  let fixture: ComponentFixture<MyComp9755Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9755Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9755Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
