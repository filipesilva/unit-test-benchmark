import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6543Component } from './my-comp-6543.component';

describe('MyComp6543Component', () => {
  let component: MyComp6543Component;
  let fixture: ComponentFixture<MyComp6543Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6543Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6543Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
