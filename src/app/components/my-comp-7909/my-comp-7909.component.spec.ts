import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7909Component } from './my-comp-7909.component';

describe('MyComp7909Component', () => {
  let component: MyComp7909Component;
  let fixture: ComponentFixture<MyComp7909Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7909Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7909Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
