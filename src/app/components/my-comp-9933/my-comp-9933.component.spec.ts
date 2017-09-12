import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9933Component } from './my-comp-9933.component';

describe('MyComp9933Component', () => {
  let component: MyComp9933Component;
  let fixture: ComponentFixture<MyComp9933Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9933Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9933Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
