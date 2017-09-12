import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9657Component } from './my-comp-9657.component';

describe('MyComp9657Component', () => {
  let component: MyComp9657Component;
  let fixture: ComponentFixture<MyComp9657Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9657Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9657Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
