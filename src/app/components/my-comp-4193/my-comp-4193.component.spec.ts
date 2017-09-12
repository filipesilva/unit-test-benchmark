import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4193Component } from './my-comp-4193.component';

describe('MyComp4193Component', () => {
  let component: MyComp4193Component;
  let fixture: ComponentFixture<MyComp4193Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4193Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4193Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
