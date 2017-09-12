import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp711Component } from './my-comp-711.component';

describe('MyComp711Component', () => {
  let component: MyComp711Component;
  let fixture: ComponentFixture<MyComp711Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp711Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp711Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
