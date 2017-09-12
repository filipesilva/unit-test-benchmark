import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6981Component } from './my-comp-6981.component';

describe('MyComp6981Component', () => {
  let component: MyComp6981Component;
  let fixture: ComponentFixture<MyComp6981Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6981Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6981Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
