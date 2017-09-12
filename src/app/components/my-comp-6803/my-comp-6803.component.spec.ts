import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6803Component } from './my-comp-6803.component';

describe('MyComp6803Component', () => {
  let component: MyComp6803Component;
  let fixture: ComponentFixture<MyComp6803Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6803Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6803Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
