import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9263Component } from './my-comp-9263.component';

describe('MyComp9263Component', () => {
  let component: MyComp9263Component;
  let fixture: ComponentFixture<MyComp9263Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9263Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9263Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
