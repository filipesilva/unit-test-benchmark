import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7273Component } from './my-comp-7273.component';

describe('MyComp7273Component', () => {
  let component: MyComp7273Component;
  let fixture: ComponentFixture<MyComp7273Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7273Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7273Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
