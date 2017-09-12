import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7033Component } from './my-comp-7033.component';

describe('MyComp7033Component', () => {
  let component: MyComp7033Component;
  let fixture: ComponentFixture<MyComp7033Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7033Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7033Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
