import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1630Component } from './my-comp-1630.component';

describe('MyComp1630Component', () => {
  let component: MyComp1630Component;
  let fixture: ComponentFixture<MyComp1630Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1630Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1630Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
