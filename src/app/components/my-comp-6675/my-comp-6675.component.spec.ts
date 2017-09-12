import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6675Component } from './my-comp-6675.component';

describe('MyComp6675Component', () => {
  let component: MyComp6675Component;
  let fixture: ComponentFixture<MyComp6675Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6675Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6675Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
