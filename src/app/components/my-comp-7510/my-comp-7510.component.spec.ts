import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7510Component } from './my-comp-7510.component';

describe('MyComp7510Component', () => {
  let component: MyComp7510Component;
  let fixture: ComponentFixture<MyComp7510Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7510Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7510Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
