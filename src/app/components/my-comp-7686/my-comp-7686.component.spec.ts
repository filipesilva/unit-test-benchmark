import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7686Component } from './my-comp-7686.component';

describe('MyComp7686Component', () => {
  let component: MyComp7686Component;
  let fixture: ComponentFixture<MyComp7686Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7686Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7686Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
