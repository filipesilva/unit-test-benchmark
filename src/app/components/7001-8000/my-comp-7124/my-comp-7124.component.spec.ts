import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7124Component } from './my-comp-7124.component';

describe('MyComp7124Component', () => {
  let component: MyComp7124Component;
  let fixture: ComponentFixture<MyComp7124Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7124Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7124Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
