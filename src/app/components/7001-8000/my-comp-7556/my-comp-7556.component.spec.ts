import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7556Component } from './my-comp-7556.component';

describe('MyComp7556Component', () => {
  let component: MyComp7556Component;
  let fixture: ComponentFixture<MyComp7556Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7556Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7556Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
