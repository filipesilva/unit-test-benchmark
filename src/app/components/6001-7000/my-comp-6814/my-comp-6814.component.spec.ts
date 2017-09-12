import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6814Component } from './my-comp-6814.component';

describe('MyComp6814Component', () => {
  let component: MyComp6814Component;
  let fixture: ComponentFixture<MyComp6814Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6814Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6814Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
