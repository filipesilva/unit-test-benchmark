import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3914Component } from './my-comp-3914.component';

describe('MyComp3914Component', () => {
  let component: MyComp3914Component;
  let fixture: ComponentFixture<MyComp3914Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3914Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3914Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
