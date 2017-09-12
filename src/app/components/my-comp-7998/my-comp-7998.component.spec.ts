import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7998Component } from './my-comp-7998.component';

describe('MyComp7998Component', () => {
  let component: MyComp7998Component;
  let fixture: ComponentFixture<MyComp7998Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7998Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7998Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
