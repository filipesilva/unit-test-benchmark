import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7115Component } from './my-comp-7115.component';

describe('MyComp7115Component', () => {
  let component: MyComp7115Component;
  let fixture: ComponentFixture<MyComp7115Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7115Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7115Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
