import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp636Component } from './my-comp-636.component';

describe('MyComp636Component', () => {
  let component: MyComp636Component;
  let fixture: ComponentFixture<MyComp636Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp636Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp636Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
