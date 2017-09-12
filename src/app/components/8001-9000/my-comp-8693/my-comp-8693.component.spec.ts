import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8693Component } from './my-comp-8693.component';

describe('MyComp8693Component', () => {
  let component: MyComp8693Component;
  let fixture: ComponentFixture<MyComp8693Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8693Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8693Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
