import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6478Component } from './my-comp-6478.component';

describe('MyComp6478Component', () => {
  let component: MyComp6478Component;
  let fixture: ComponentFixture<MyComp6478Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6478Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6478Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
