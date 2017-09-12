import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5560Component } from './my-comp-5560.component';

describe('MyComp5560Component', () => {
  let component: MyComp5560Component;
  let fixture: ComponentFixture<MyComp5560Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5560Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5560Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
