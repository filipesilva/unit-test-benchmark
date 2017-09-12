import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1425Component } from './my-comp-1425.component';

describe('MyComp1425Component', () => {
  let component: MyComp1425Component;
  let fixture: ComponentFixture<MyComp1425Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1425Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1425Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
