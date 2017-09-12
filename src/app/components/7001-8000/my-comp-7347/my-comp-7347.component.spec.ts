import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7347Component } from './my-comp-7347.component';

describe('MyComp7347Component', () => {
  let component: MyComp7347Component;
  let fixture: ComponentFixture<MyComp7347Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7347Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7347Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
