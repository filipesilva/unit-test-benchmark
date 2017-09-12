import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9346Component } from './my-comp-9346.component';

describe('MyComp9346Component', () => {
  let component: MyComp9346Component;
  let fixture: ComponentFixture<MyComp9346Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9346Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9346Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
