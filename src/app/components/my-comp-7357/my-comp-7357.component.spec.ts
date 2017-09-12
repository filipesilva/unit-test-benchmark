import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7357Component } from './my-comp-7357.component';

describe('MyComp7357Component', () => {
  let component: MyComp7357Component;
  let fixture: ComponentFixture<MyComp7357Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7357Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7357Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
