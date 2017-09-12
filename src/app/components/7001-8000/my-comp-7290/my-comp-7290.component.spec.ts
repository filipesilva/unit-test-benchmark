import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7290Component } from './my-comp-7290.component';

describe('MyComp7290Component', () => {
  let component: MyComp7290Component;
  let fixture: ComponentFixture<MyComp7290Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7290Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7290Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
