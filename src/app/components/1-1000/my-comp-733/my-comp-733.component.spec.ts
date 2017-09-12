import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp733Component } from './my-comp-733.component';

describe('MyComp733Component', () => {
  let component: MyComp733Component;
  let fixture: ComponentFixture<MyComp733Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp733Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp733Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
