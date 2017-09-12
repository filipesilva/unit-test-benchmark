import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6798Component } from './my-comp-6798.component';

describe('MyComp6798Component', () => {
  let component: MyComp6798Component;
  let fixture: ComponentFixture<MyComp6798Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6798Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6798Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
