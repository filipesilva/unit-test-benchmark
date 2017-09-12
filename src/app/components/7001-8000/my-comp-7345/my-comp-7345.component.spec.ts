import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7345Component } from './my-comp-7345.component';

describe('MyComp7345Component', () => {
  let component: MyComp7345Component;
  let fixture: ComponentFixture<MyComp7345Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7345Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7345Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
