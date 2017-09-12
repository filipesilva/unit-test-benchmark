import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9805Component } from './my-comp-9805.component';

describe('MyComp9805Component', () => {
  let component: MyComp9805Component;
  let fixture: ComponentFixture<MyComp9805Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9805Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9805Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
