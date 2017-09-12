import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4267Component } from './my-comp-4267.component';

describe('MyComp4267Component', () => {
  let component: MyComp4267Component;
  let fixture: ComponentFixture<MyComp4267Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4267Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4267Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
