import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7959Component } from './my-comp-7959.component';

describe('MyComp7959Component', () => {
  let component: MyComp7959Component;
  let fixture: ComponentFixture<MyComp7959Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7959Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7959Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
