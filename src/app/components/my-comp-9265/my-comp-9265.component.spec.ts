import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9265Component } from './my-comp-9265.component';

describe('MyComp9265Component', () => {
  let component: MyComp9265Component;
  let fixture: ComponentFixture<MyComp9265Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9265Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9265Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
