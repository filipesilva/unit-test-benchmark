import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9157Component } from './my-comp-9157.component';

describe('MyComp9157Component', () => {
  let component: MyComp9157Component;
  let fixture: ComponentFixture<MyComp9157Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9157Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9157Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
