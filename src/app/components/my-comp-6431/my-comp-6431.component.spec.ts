import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6431Component } from './my-comp-6431.component';

describe('MyComp6431Component', () => {
  let component: MyComp6431Component;
  let fixture: ComponentFixture<MyComp6431Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6431Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6431Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
