import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7939Component } from './my-comp-7939.component';

describe('MyComp7939Component', () => {
  let component: MyComp7939Component;
  let fixture: ComponentFixture<MyComp7939Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7939Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7939Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
