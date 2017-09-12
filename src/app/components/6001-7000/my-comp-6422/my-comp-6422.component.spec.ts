import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6422Component } from './my-comp-6422.component';

describe('MyComp6422Component', () => {
  let component: MyComp6422Component;
  let fixture: ComponentFixture<MyComp6422Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6422Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6422Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
