import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7304Component } from './my-comp-7304.component';

describe('MyComp7304Component', () => {
  let component: MyComp7304Component;
  let fixture: ComponentFixture<MyComp7304Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7304Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7304Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
