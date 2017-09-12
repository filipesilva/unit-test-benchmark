import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4455Component } from './my-comp-4455.component';

describe('MyComp4455Component', () => {
  let component: MyComp4455Component;
  let fixture: ComponentFixture<MyComp4455Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4455Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4455Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
