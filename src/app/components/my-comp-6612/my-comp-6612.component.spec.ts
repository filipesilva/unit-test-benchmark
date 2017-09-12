import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6612Component } from './my-comp-6612.component';

describe('MyComp6612Component', () => {
  let component: MyComp6612Component;
  let fixture: ComponentFixture<MyComp6612Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6612Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6612Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
