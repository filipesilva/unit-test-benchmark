import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4489Component } from './my-comp-4489.component';

describe('MyComp4489Component', () => {
  let component: MyComp4489Component;
  let fixture: ComponentFixture<MyComp4489Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4489Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4489Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
