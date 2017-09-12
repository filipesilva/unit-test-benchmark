import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6441Component } from './my-comp-6441.component';

describe('MyComp6441Component', () => {
  let component: MyComp6441Component;
  let fixture: ComponentFixture<MyComp6441Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6441Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6441Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
