import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4411Component } from './my-comp-4411.component';

describe('MyComp4411Component', () => {
  let component: MyComp4411Component;
  let fixture: ComponentFixture<MyComp4411Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4411Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4411Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
