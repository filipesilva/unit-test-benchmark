import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7948Component } from './my-comp-7948.component';

describe('MyComp7948Component', () => {
  let component: MyComp7948Component;
  let fixture: ComponentFixture<MyComp7948Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7948Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7948Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
