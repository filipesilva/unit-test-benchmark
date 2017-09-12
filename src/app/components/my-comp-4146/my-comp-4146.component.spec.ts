import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4146Component } from './my-comp-4146.component';

describe('MyComp4146Component', () => {
  let component: MyComp4146Component;
  let fixture: ComponentFixture<MyComp4146Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4146Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4146Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
