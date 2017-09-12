import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp887Component } from './my-comp-887.component';

describe('MyComp887Component', () => {
  let component: MyComp887Component;
  let fixture: ComponentFixture<MyComp887Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp887Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp887Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
