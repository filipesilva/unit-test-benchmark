import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4980Component } from './my-comp-4980.component';

describe('MyComp4980Component', () => {
  let component: MyComp4980Component;
  let fixture: ComponentFixture<MyComp4980Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4980Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4980Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
