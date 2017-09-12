import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6554Component } from './my-comp-6554.component';

describe('MyComp6554Component', () => {
  let component: MyComp6554Component;
  let fixture: ComponentFixture<MyComp6554Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6554Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6554Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
