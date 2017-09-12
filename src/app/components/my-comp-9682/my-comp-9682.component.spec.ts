import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9682Component } from './my-comp-9682.component';

describe('MyComp9682Component', () => {
  let component: MyComp9682Component;
  let fixture: ComponentFixture<MyComp9682Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9682Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9682Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
