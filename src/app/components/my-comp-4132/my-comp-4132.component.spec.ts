import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4132Component } from './my-comp-4132.component';

describe('MyComp4132Component', () => {
  let component: MyComp4132Component;
  let fixture: ComponentFixture<MyComp4132Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4132Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4132Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
