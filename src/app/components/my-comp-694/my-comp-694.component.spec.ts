import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp694Component } from './my-comp-694.component';

describe('MyComp694Component', () => {
  let component: MyComp694Component;
  let fixture: ComponentFixture<MyComp694Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp694Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp694Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
