import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9452Component } from './my-comp-9452.component';

describe('MyComp9452Component', () => {
  let component: MyComp9452Component;
  let fixture: ComponentFixture<MyComp9452Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9452Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9452Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
