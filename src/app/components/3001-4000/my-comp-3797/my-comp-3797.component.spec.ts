import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3797Component } from './my-comp-3797.component';

describe('MyComp3797Component', () => {
  let component: MyComp3797Component;
  let fixture: ComponentFixture<MyComp3797Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3797Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3797Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
