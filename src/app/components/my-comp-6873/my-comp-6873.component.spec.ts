import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6873Component } from './my-comp-6873.component';

describe('MyComp6873Component', () => {
  let component: MyComp6873Component;
  let fixture: ComponentFixture<MyComp6873Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6873Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6873Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
