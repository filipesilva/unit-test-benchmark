import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7184Component } from './my-comp-7184.component';

describe('MyComp7184Component', () => {
  let component: MyComp7184Component;
  let fixture: ComponentFixture<MyComp7184Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7184Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7184Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
