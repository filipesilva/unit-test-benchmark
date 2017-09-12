import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp827Component } from './my-comp-827.component';

describe('MyComp827Component', () => {
  let component: MyComp827Component;
  let fixture: ComponentFixture<MyComp827Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp827Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp827Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
