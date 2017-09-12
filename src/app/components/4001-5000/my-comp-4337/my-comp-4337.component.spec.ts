import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4337Component } from './my-comp-4337.component';

describe('MyComp4337Component', () => {
  let component: MyComp4337Component;
  let fixture: ComponentFixture<MyComp4337Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4337Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4337Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
