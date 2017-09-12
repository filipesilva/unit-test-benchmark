import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4593Component } from './my-comp-4593.component';

describe('MyComp4593Component', () => {
  let component: MyComp4593Component;
  let fixture: ComponentFixture<MyComp4593Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4593Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4593Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
