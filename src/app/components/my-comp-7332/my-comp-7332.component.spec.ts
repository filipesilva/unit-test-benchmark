import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7332Component } from './my-comp-7332.component';

describe('MyComp7332Component', () => {
  let component: MyComp7332Component;
  let fixture: ComponentFixture<MyComp7332Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7332Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7332Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
