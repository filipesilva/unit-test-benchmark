import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5424Component } from './my-comp-5424.component';

describe('MyComp5424Component', () => {
  let component: MyComp5424Component;
  let fixture: ComponentFixture<MyComp5424Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5424Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5424Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
