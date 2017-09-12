import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6598Component } from './my-comp-6598.component';

describe('MyComp6598Component', () => {
  let component: MyComp6598Component;
  let fixture: ComponentFixture<MyComp6598Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6598Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6598Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
