import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4174Component } from './my-comp-4174.component';

describe('MyComp4174Component', () => {
  let component: MyComp4174Component;
  let fixture: ComponentFixture<MyComp4174Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4174Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4174Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
