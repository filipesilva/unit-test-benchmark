import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp459Component } from './my-comp-459.component';

describe('MyComp459Component', () => {
  let component: MyComp459Component;
  let fixture: ComponentFixture<MyComp459Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp459Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp459Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
