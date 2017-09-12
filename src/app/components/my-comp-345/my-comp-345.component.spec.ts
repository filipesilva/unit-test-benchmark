import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp345Component } from './my-comp-345.component';

describe('MyComp345Component', () => {
  let component: MyComp345Component;
  let fixture: ComponentFixture<MyComp345Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp345Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp345Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
