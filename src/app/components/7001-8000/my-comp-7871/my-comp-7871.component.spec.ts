import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7871Component } from './my-comp-7871.component';

describe('MyComp7871Component', () => {
  let component: MyComp7871Component;
  let fixture: ComponentFixture<MyComp7871Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7871Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7871Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
