import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6265Component } from './my-comp-6265.component';

describe('MyComp6265Component', () => {
  let component: MyComp6265Component;
  let fixture: ComponentFixture<MyComp6265Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6265Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6265Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
