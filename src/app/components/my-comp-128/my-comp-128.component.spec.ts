import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp128Component } from './my-comp-128.component';

describe('MyComp128Component', () => {
  let component: MyComp128Component;
  let fixture: ComponentFixture<MyComp128Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp128Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp128Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
