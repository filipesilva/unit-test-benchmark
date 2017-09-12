import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4924Component } from './my-comp-4924.component';

describe('MyComp4924Component', () => {
  let component: MyComp4924Component;
  let fixture: ComponentFixture<MyComp4924Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4924Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4924Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
