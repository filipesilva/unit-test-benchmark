import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9647Component } from './my-comp-9647.component';

describe('MyComp9647Component', () => {
  let component: MyComp9647Component;
  let fixture: ComponentFixture<MyComp9647Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9647Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9647Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
