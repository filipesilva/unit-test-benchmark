import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7543Component } from './my-comp-7543.component';

describe('MyComp7543Component', () => {
  let component: MyComp7543Component;
  let fixture: ComponentFixture<MyComp7543Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7543Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7543Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
