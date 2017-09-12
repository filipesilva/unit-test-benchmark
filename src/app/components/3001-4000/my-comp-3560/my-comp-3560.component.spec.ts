import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3560Component } from './my-comp-3560.component';

describe('MyComp3560Component', () => {
  let component: MyComp3560Component;
  let fixture: ComponentFixture<MyComp3560Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3560Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3560Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
