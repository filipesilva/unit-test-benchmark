import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9234Component } from './my-comp-9234.component';

describe('MyComp9234Component', () => {
  let component: MyComp9234Component;
  let fixture: ComponentFixture<MyComp9234Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9234Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9234Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
