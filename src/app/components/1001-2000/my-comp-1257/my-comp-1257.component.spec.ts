import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1257Component } from './my-comp-1257.component';

describe('MyComp1257Component', () => {
  let component: MyComp1257Component;
  let fixture: ComponentFixture<MyComp1257Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1257Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1257Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
