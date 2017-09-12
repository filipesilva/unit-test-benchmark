import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp423Component } from './my-comp-423.component';

describe('MyComp423Component', () => {
  let component: MyComp423Component;
  let fixture: ComponentFixture<MyComp423Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp423Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp423Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
