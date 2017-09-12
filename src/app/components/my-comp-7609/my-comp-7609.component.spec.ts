import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7609Component } from './my-comp-7609.component';

describe('MyComp7609Component', () => {
  let component: MyComp7609Component;
  let fixture: ComponentFixture<MyComp7609Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7609Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7609Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
