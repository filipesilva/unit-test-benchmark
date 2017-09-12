import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5134Component } from './my-comp-5134.component';

describe('MyComp5134Component', () => {
  let component: MyComp5134Component;
  let fixture: ComponentFixture<MyComp5134Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5134Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5134Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
