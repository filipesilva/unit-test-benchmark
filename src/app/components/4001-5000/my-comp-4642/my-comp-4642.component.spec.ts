import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4642Component } from './my-comp-4642.component';

describe('MyComp4642Component', () => {
  let component: MyComp4642Component;
  let fixture: ComponentFixture<MyComp4642Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4642Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4642Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
