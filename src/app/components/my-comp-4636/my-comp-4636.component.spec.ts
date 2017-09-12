import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4636Component } from './my-comp-4636.component';

describe('MyComp4636Component', () => {
  let component: MyComp4636Component;
  let fixture: ComponentFixture<MyComp4636Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4636Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4636Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
