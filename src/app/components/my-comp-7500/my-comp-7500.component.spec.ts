import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7500Component } from './my-comp-7500.component';

describe('MyComp7500Component', () => {
  let component: MyComp7500Component;
  let fixture: ComponentFixture<MyComp7500Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7500Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
