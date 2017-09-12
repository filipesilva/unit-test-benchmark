import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp115Component } from './my-comp-115.component';

describe('MyComp115Component', () => {
  let component: MyComp115Component;
  let fixture: ComponentFixture<MyComp115Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp115Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp115Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
