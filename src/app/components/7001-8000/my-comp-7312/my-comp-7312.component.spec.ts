import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7312Component } from './my-comp-7312.component';

describe('MyComp7312Component', () => {
  let component: MyComp7312Component;
  let fixture: ComponentFixture<MyComp7312Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7312Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7312Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
