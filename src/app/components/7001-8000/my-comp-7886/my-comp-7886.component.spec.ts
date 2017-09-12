import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7886Component } from './my-comp-7886.component';

describe('MyComp7886Component', () => {
  let component: MyComp7886Component;
  let fixture: ComponentFixture<MyComp7886Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7886Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7886Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
