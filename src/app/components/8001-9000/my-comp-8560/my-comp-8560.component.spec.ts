import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8560Component } from './my-comp-8560.component';

describe('MyComp8560Component', () => {
  let component: MyComp8560Component;
  let fixture: ComponentFixture<MyComp8560Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8560Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8560Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
