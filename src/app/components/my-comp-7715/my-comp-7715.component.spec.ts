import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7715Component } from './my-comp-7715.component';

describe('MyComp7715Component', () => {
  let component: MyComp7715Component;
  let fixture: ComponentFixture<MyComp7715Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7715Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7715Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
