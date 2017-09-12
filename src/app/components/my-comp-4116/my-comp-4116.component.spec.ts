import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4116Component } from './my-comp-4116.component';

describe('MyComp4116Component', () => {
  let component: MyComp4116Component;
  let fixture: ComponentFixture<MyComp4116Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4116Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4116Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
