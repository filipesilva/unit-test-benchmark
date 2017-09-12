import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7813Component } from './my-comp-7813.component';

describe('MyComp7813Component', () => {
  let component: MyComp7813Component;
  let fixture: ComponentFixture<MyComp7813Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7813Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7813Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
