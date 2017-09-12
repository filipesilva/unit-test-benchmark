import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6913Component } from './my-comp-6913.component';

describe('MyComp6913Component', () => {
  let component: MyComp6913Component;
  let fixture: ComponentFixture<MyComp6913Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6913Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6913Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
