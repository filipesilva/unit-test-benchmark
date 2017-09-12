import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6020Component } from './my-comp-6020.component';

describe('MyComp6020Component', () => {
  let component: MyComp6020Component;
  let fixture: ComponentFixture<MyComp6020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6020Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
