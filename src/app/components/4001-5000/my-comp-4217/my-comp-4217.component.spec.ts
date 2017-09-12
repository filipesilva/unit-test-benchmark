import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4217Component } from './my-comp-4217.component';

describe('MyComp4217Component', () => {
  let component: MyComp4217Component;
  let fixture: ComponentFixture<MyComp4217Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4217Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4217Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
