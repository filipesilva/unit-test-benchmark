import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7081Component } from './my-comp-7081.component';

describe('MyComp7081Component', () => {
  let component: MyComp7081Component;
  let fixture: ComponentFixture<MyComp7081Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7081Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7081Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
