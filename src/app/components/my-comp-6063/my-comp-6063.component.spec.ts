import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6063Component } from './my-comp-6063.component';

describe('MyComp6063Component', () => {
  let component: MyComp6063Component;
  let fixture: ComponentFixture<MyComp6063Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6063Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6063Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
