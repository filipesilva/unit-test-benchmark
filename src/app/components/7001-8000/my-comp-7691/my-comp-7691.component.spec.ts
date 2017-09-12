import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7691Component } from './my-comp-7691.component';

describe('MyComp7691Component', () => {
  let component: MyComp7691Component;
  let fixture: ComponentFixture<MyComp7691Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7691Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7691Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
