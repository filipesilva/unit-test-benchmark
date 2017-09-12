import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7552Component } from './my-comp-7552.component';

describe('MyComp7552Component', () => {
  let component: MyComp7552Component;
  let fixture: ComponentFixture<MyComp7552Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7552Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7552Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
