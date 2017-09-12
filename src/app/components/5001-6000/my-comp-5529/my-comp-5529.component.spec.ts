import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5529Component } from './my-comp-5529.component';

describe('MyComp5529Component', () => {
  let component: MyComp5529Component;
  let fixture: ComponentFixture<MyComp5529Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5529Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5529Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
