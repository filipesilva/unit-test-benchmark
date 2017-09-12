import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp883Component } from './my-comp-883.component';

describe('MyComp883Component', () => {
  let component: MyComp883Component;
  let fixture: ComponentFixture<MyComp883Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp883Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp883Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
