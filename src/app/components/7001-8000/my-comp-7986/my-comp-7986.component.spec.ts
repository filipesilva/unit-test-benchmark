import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7986Component } from './my-comp-7986.component';

describe('MyComp7986Component', () => {
  let component: MyComp7986Component;
  let fixture: ComponentFixture<MyComp7986Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7986Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7986Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
