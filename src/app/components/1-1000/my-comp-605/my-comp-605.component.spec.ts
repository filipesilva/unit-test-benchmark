import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp605Component } from './my-comp-605.component';

describe('MyComp605Component', () => {
  let component: MyComp605Component;
  let fixture: ComponentFixture<MyComp605Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp605Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp605Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
