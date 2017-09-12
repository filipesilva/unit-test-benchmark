import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1541Component } from './my-comp-1541.component';

describe('MyComp1541Component', () => {
  let component: MyComp1541Component;
  let fixture: ComponentFixture<MyComp1541Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1541Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1541Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
