import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4225Component } from './my-comp-4225.component';

describe('MyComp4225Component', () => {
  let component: MyComp4225Component;
  let fixture: ComponentFixture<MyComp4225Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4225Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4225Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
