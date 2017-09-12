import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6684Component } from './my-comp-6684.component';

describe('MyComp6684Component', () => {
  let component: MyComp6684Component;
  let fixture: ComponentFixture<MyComp6684Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6684Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6684Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
