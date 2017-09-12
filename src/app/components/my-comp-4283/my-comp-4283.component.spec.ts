import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4283Component } from './my-comp-4283.component';

describe('MyComp4283Component', () => {
  let component: MyComp4283Component;
  let fixture: ComponentFixture<MyComp4283Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4283Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4283Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
