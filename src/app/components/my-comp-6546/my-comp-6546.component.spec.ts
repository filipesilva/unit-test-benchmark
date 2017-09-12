import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6546Component } from './my-comp-6546.component';

describe('MyComp6546Component', () => {
  let component: MyComp6546Component;
  let fixture: ComponentFixture<MyComp6546Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6546Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6546Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
