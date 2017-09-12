import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6663Component } from './my-comp-6663.component';

describe('MyComp6663Component', () => {
  let component: MyComp6663Component;
  let fixture: ComponentFixture<MyComp6663Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6663Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6663Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
