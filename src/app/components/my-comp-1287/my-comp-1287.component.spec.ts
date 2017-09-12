import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1287Component } from './my-comp-1287.component';

describe('MyComp1287Component', () => {
  let component: MyComp1287Component;
  let fixture: ComponentFixture<MyComp1287Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1287Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1287Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
