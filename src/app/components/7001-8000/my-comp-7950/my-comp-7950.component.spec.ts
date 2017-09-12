import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7950Component } from './my-comp-7950.component';

describe('MyComp7950Component', () => {
  let component: MyComp7950Component;
  let fixture: ComponentFixture<MyComp7950Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7950Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7950Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
