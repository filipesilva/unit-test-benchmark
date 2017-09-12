import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7640Component } from './my-comp-7640.component';

describe('MyComp7640Component', () => {
  let component: MyComp7640Component;
  let fixture: ComponentFixture<MyComp7640Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7640Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7640Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
