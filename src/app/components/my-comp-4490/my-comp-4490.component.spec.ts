import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4490Component } from './my-comp-4490.component';

describe('MyComp4490Component', () => {
  let component: MyComp4490Component;
  let fixture: ComponentFixture<MyComp4490Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4490Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4490Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
