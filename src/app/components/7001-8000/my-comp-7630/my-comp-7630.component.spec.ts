import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7630Component } from './my-comp-7630.component';

describe('MyComp7630Component', () => {
  let component: MyComp7630Component;
  let fixture: ComponentFixture<MyComp7630Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7630Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7630Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
