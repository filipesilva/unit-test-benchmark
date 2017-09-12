import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4870Component } from './my-comp-4870.component';

describe('MyComp4870Component', () => {
  let component: MyComp4870Component;
  let fixture: ComponentFixture<MyComp4870Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4870Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4870Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
