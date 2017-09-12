import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp560Component } from './my-comp-560.component';

describe('MyComp560Component', () => {
  let component: MyComp560Component;
  let fixture: ComponentFixture<MyComp560Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp560Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp560Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
