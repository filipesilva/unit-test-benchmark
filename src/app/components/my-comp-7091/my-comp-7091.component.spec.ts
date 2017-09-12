import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7091Component } from './my-comp-7091.component';

describe('MyComp7091Component', () => {
  let component: MyComp7091Component;
  let fixture: ComponentFixture<MyComp7091Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7091Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7091Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
