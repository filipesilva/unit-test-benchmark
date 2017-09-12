import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9170Component } from './my-comp-9170.component';

describe('MyComp9170Component', () => {
  let component: MyComp9170Component;
  let fixture: ComponentFixture<MyComp9170Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9170Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9170Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
