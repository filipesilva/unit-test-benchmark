import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4648Component } from './my-comp-4648.component';

describe('MyComp4648Component', () => {
  let component: MyComp4648Component;
  let fixture: ComponentFixture<MyComp4648Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4648Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4648Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
