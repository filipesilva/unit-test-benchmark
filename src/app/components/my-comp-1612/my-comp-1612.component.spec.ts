import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1612Component } from './my-comp-1612.component';

describe('MyComp1612Component', () => {
  let component: MyComp1612Component;
  let fixture: ComponentFixture<MyComp1612Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1612Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1612Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
