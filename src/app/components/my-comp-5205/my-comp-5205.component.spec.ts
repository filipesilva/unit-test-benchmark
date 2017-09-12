import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5205Component } from './my-comp-5205.component';

describe('MyComp5205Component', () => {
  let component: MyComp5205Component;
  let fixture: ComponentFixture<MyComp5205Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5205Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5205Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
