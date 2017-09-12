import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9101Component } from './my-comp-9101.component';

describe('MyComp9101Component', () => {
  let component: MyComp9101Component;
  let fixture: ComponentFixture<MyComp9101Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9101Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
