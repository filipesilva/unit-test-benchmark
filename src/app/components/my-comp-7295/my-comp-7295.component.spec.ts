import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7295Component } from './my-comp-7295.component';

describe('MyComp7295Component', () => {
  let component: MyComp7295Component;
  let fixture: ComponentFixture<MyComp7295Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7295Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7295Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
