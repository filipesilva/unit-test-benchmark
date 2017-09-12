import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9476Component } from './my-comp-9476.component';

describe('MyComp9476Component', () => {
  let component: MyComp9476Component;
  let fixture: ComponentFixture<MyComp9476Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9476Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9476Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
