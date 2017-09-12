import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6091Component } from './my-comp-6091.component';

describe('MyComp6091Component', () => {
  let component: MyComp6091Component;
  let fixture: ComponentFixture<MyComp6091Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6091Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6091Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
