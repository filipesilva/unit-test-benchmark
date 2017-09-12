import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7899Component } from './my-comp-7899.component';

describe('MyComp7899Component', () => {
  let component: MyComp7899Component;
  let fixture: ComponentFixture<MyComp7899Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7899Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7899Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
