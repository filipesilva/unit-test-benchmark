import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp574Component } from './my-comp-574.component';

describe('MyComp574Component', () => {
  let component: MyComp574Component;
  let fixture: ComponentFixture<MyComp574Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp574Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp574Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
