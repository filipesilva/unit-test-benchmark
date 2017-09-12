import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4192Component } from './my-comp-4192.component';

describe('MyComp4192Component', () => {
  let component: MyComp4192Component;
  let fixture: ComponentFixture<MyComp4192Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4192Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4192Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
