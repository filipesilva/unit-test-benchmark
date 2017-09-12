import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9814Component } from './my-comp-9814.component';

describe('MyComp9814Component', () => {
  let component: MyComp9814Component;
  let fixture: ComponentFixture<MyComp9814Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9814Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9814Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
