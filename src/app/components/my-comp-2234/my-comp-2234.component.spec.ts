import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2234Component } from './my-comp-2234.component';

describe('MyComp2234Component', () => {
  let component: MyComp2234Component;
  let fixture: ComponentFixture<MyComp2234Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2234Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2234Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
