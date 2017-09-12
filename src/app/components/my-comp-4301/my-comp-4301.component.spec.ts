import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4301Component } from './my-comp-4301.component';

describe('MyComp4301Component', () => {
  let component: MyComp4301Component;
  let fixture: ComponentFixture<MyComp4301Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4301Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4301Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
