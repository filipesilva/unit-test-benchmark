import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9219Component } from './my-comp-9219.component';

describe('MyComp9219Component', () => {
  let component: MyComp9219Component;
  let fixture: ComponentFixture<MyComp9219Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9219Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9219Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
