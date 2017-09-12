import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1312Component } from './my-comp-1312.component';

describe('MyComp1312Component', () => {
  let component: MyComp1312Component;
  let fixture: ComponentFixture<MyComp1312Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1312Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1312Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
