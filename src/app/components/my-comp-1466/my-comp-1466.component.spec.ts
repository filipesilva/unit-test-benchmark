import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1466Component } from './my-comp-1466.component';

describe('MyComp1466Component', () => {
  let component: MyComp1466Component;
  let fixture: ComponentFixture<MyComp1466Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1466Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1466Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
