import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6812Component } from './my-comp-6812.component';

describe('MyComp6812Component', () => {
  let component: MyComp6812Component;
  let fixture: ComponentFixture<MyComp6812Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6812Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6812Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
