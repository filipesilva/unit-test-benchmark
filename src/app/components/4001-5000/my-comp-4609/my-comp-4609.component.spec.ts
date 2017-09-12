import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4609Component } from './my-comp-4609.component';

describe('MyComp4609Component', () => {
  let component: MyComp4609Component;
  let fixture: ComponentFixture<MyComp4609Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4609Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4609Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
