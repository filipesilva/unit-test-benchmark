import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7951Component } from './my-comp-7951.component';

describe('MyComp7951Component', () => {
  let component: MyComp7951Component;
  let fixture: ComponentFixture<MyComp7951Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7951Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7951Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
