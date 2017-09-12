import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp329Component } from './my-comp-329.component';

describe('MyComp329Component', () => {
  let component: MyComp329Component;
  let fixture: ComponentFixture<MyComp329Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp329Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp329Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
