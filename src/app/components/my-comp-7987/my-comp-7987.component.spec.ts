import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7987Component } from './my-comp-7987.component';

describe('MyComp7987Component', () => {
  let component: MyComp7987Component;
  let fixture: ComponentFixture<MyComp7987Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7987Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7987Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
