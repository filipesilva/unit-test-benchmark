import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7306Component } from './my-comp-7306.component';

describe('MyComp7306Component', () => {
  let component: MyComp7306Component;
  let fixture: ComponentFixture<MyComp7306Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7306Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7306Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
