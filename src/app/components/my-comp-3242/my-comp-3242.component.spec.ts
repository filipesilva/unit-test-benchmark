import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3242Component } from './my-comp-3242.component';

describe('MyComp3242Component', () => {
  let component: MyComp3242Component;
  let fixture: ComponentFixture<MyComp3242Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3242Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3242Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
