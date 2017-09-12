import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7435Component } from './my-comp-7435.component';

describe('MyComp7435Component', () => {
  let component: MyComp7435Component;
  let fixture: ComponentFixture<MyComp7435Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7435Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7435Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
