import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6447Component } from './my-comp-6447.component';

describe('MyComp6447Component', () => {
  let component: MyComp6447Component;
  let fixture: ComponentFixture<MyComp6447Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6447Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6447Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
