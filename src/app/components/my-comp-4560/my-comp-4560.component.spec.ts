import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4560Component } from './my-comp-4560.component';

describe('MyComp4560Component', () => {
  let component: MyComp4560Component;
  let fixture: ComponentFixture<MyComp4560Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4560Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4560Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
