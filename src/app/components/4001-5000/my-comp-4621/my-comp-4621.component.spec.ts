import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4621Component } from './my-comp-4621.component';

describe('MyComp4621Component', () => {
  let component: MyComp4621Component;
  let fixture: ComponentFixture<MyComp4621Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4621Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4621Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
