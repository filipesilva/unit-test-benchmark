import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2829Component } from './my-comp-2829.component';

describe('MyComp2829Component', () => {
  let component: MyComp2829Component;
  let fixture: ComponentFixture<MyComp2829Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2829Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2829Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
