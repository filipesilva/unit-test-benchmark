import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6338Component } from './my-comp-6338.component';

describe('MyComp6338Component', () => {
  let component: MyComp6338Component;
  let fixture: ComponentFixture<MyComp6338Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6338Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6338Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
