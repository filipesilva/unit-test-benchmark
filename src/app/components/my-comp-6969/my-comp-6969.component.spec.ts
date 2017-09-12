import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6969Component } from './my-comp-6969.component';

describe('MyComp6969Component', () => {
  let component: MyComp6969Component;
  let fixture: ComponentFixture<MyComp6969Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6969Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6969Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
