import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9980Component } from './my-comp-9980.component';

describe('MyComp9980Component', () => {
  let component: MyComp9980Component;
  let fixture: ComponentFixture<MyComp9980Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9980Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9980Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
