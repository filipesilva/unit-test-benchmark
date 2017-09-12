import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9870Component } from './my-comp-9870.component';

describe('MyComp9870Component', () => {
  let component: MyComp9870Component;
  let fixture: ComponentFixture<MyComp9870Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9870Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9870Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
