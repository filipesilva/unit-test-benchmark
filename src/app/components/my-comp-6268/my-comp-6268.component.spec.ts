import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6268Component } from './my-comp-6268.component';

describe('MyComp6268Component', () => {
  let component: MyComp6268Component;
  let fixture: ComponentFixture<MyComp6268Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6268Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6268Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
