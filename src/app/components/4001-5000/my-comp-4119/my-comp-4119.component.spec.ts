import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4119Component } from './my-comp-4119.component';

describe('MyComp4119Component', () => {
  let component: MyComp4119Component;
  let fixture: ComponentFixture<MyComp4119Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4119Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4119Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
