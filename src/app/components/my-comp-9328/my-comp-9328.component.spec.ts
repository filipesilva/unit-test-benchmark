import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9328Component } from './my-comp-9328.component';

describe('MyComp9328Component', () => {
  let component: MyComp9328Component;
  let fixture: ComponentFixture<MyComp9328Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9328Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9328Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
