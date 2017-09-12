import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5510Component } from './my-comp-5510.component';

describe('MyComp5510Component', () => {
  let component: MyComp5510Component;
  let fixture: ComponentFixture<MyComp5510Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5510Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5510Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
