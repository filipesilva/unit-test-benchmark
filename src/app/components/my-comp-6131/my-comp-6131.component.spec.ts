import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6131Component } from './my-comp-6131.component';

describe('MyComp6131Component', () => {
  let component: MyComp6131Component;
  let fixture: ComponentFixture<MyComp6131Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6131Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
