import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5711Component } from './my-comp-5711.component';

describe('MyComp5711Component', () => {
  let component: MyComp5711Component;
  let fixture: ComponentFixture<MyComp5711Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5711Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5711Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
