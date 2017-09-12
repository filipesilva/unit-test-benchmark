import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6830Component } from './my-comp-6830.component';

describe('MyComp6830Component', () => {
  let component: MyComp6830Component;
  let fixture: ComponentFixture<MyComp6830Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6830Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6830Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
