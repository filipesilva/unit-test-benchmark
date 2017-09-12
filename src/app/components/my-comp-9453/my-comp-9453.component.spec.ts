import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9453Component } from './my-comp-9453.component';

describe('MyComp9453Component', () => {
  let component: MyComp9453Component;
  let fixture: ComponentFixture<MyComp9453Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9453Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9453Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
