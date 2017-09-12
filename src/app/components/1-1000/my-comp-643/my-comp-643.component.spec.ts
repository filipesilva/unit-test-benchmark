import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp643Component } from './my-comp-643.component';

describe('MyComp643Component', () => {
  let component: MyComp643Component;
  let fixture: ComponentFixture<MyComp643Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp643Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp643Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
