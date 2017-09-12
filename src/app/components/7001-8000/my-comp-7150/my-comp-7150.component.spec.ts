import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7150Component } from './my-comp-7150.component';

describe('MyComp7150Component', () => {
  let component: MyComp7150Component;
  let fixture: ComponentFixture<MyComp7150Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7150Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7150Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
