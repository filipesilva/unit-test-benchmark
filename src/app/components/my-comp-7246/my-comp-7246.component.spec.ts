import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7246Component } from './my-comp-7246.component';

describe('MyComp7246Component', () => {
  let component: MyComp7246Component;
  let fixture: ComponentFixture<MyComp7246Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7246Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7246Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
