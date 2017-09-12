import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp219Component } from './my-comp-219.component';

describe('MyComp219Component', () => {
  let component: MyComp219Component;
  let fixture: ComponentFixture<MyComp219Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp219Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp219Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
