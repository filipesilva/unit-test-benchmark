import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7280Component } from './my-comp-7280.component';

describe('MyComp7280Component', () => {
  let component: MyComp7280Component;
  let fixture: ComponentFixture<MyComp7280Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7280Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7280Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
