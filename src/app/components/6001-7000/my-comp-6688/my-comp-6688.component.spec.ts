import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6688Component } from './my-comp-6688.component';

describe('MyComp6688Component', () => {
  let component: MyComp6688Component;
  let fixture: ComponentFixture<MyComp6688Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6688Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6688Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
