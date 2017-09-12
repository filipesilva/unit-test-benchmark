import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp904Component } from './my-comp-904.component';

describe('MyComp904Component', () => {
  let component: MyComp904Component;
  let fixture: ComponentFixture<MyComp904Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp904Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp904Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
