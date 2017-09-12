import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9767Component } from './my-comp-9767.component';

describe('MyComp9767Component', () => {
  let component: MyComp9767Component;
  let fixture: ComponentFixture<MyComp9767Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9767Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9767Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
