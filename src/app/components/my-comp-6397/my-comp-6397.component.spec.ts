import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6397Component } from './my-comp-6397.component';

describe('MyComp6397Component', () => {
  let component: MyComp6397Component;
  let fixture: ComponentFixture<MyComp6397Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6397Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6397Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
