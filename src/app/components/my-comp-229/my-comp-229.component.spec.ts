import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp229Component } from './my-comp-229.component';

describe('MyComp229Component', () => {
  let component: MyComp229Component;
  let fixture: ComponentFixture<MyComp229Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp229Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp229Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
