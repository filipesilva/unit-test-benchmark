import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6680Component } from './my-comp-6680.component';

describe('MyComp6680Component', () => {
  let component: MyComp6680Component;
  let fixture: ComponentFixture<MyComp6680Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6680Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6680Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
