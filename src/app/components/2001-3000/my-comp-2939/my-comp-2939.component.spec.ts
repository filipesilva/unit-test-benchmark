import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2939Component } from './my-comp-2939.component';

describe('MyComp2939Component', () => {
  let component: MyComp2939Component;
  let fixture: ComponentFixture<MyComp2939Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2939Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2939Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
