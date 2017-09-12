import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6616Component } from './my-comp-6616.component';

describe('MyComp6616Component', () => {
  let component: MyComp6616Component;
  let fixture: ComponentFixture<MyComp6616Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6616Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6616Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
