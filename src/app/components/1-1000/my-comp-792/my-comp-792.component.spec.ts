import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp792Component } from './my-comp-792.component';

describe('MyComp792Component', () => {
  let component: MyComp792Component;
  let fixture: ComponentFixture<MyComp792Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp792Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp792Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
