import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4224Component } from './my-comp-4224.component';

describe('MyComp4224Component', () => {
  let component: MyComp4224Component;
  let fixture: ComponentFixture<MyComp4224Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4224Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4224Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
