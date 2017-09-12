import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1188Component } from './my-comp-1188.component';

describe('MyComp1188Component', () => {
  let component: MyComp1188Component;
  let fixture: ComponentFixture<MyComp1188Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1188Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1188Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
