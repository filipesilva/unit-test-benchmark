import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6757Component } from './my-comp-6757.component';

describe('MyComp6757Component', () => {
  let component: MyComp6757Component;
  let fixture: ComponentFixture<MyComp6757Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6757Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6757Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
