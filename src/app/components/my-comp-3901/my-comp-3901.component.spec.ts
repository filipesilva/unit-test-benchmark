import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3901Component } from './my-comp-3901.component';

describe('MyComp3901Component', () => {
  let component: MyComp3901Component;
  let fixture: ComponentFixture<MyComp3901Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3901Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3901Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
