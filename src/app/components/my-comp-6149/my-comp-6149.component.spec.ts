import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6149Component } from './my-comp-6149.component';

describe('MyComp6149Component', () => {
  let component: MyComp6149Component;
  let fixture: ComponentFixture<MyComp6149Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6149Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6149Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
