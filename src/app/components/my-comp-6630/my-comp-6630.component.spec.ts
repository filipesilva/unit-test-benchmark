import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6630Component } from './my-comp-6630.component';

describe('MyComp6630Component', () => {
  let component: MyComp6630Component;
  let fixture: ComponentFixture<MyComp6630Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6630Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6630Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
