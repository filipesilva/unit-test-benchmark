import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6147Component } from './my-comp-6147.component';

describe('MyComp6147Component', () => {
  let component: MyComp6147Component;
  let fixture: ComponentFixture<MyComp6147Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6147Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6147Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
