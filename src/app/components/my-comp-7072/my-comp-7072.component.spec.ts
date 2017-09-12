import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7072Component } from './my-comp-7072.component';

describe('MyComp7072Component', () => {
  let component: MyComp7072Component;
  let fixture: ComponentFixture<MyComp7072Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7072Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7072Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
