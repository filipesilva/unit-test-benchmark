import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7994Component } from './my-comp-7994.component';

describe('MyComp7994Component', () => {
  let component: MyComp7994Component;
  let fixture: ComponentFixture<MyComp7994Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7994Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7994Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
