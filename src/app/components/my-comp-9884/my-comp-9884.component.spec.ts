import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9884Component } from './my-comp-9884.component';

describe('MyComp9884Component', () => {
  let component: MyComp9884Component;
  let fixture: ComponentFixture<MyComp9884Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9884Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9884Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
