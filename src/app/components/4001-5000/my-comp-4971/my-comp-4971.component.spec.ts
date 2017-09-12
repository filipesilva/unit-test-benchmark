import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4971Component } from './my-comp-4971.component';

describe('MyComp4971Component', () => {
  let component: MyComp4971Component;
  let fixture: ComponentFixture<MyComp4971Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4971Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4971Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
