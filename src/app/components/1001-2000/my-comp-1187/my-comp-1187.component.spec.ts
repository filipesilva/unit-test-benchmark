import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1187Component } from './my-comp-1187.component';

describe('MyComp1187Component', () => {
  let component: MyComp1187Component;
  let fixture: ComponentFixture<MyComp1187Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1187Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1187Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
