import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7771Component } from './my-comp-7771.component';

describe('MyComp7771Component', () => {
  let component: MyComp7771Component;
  let fixture: ComponentFixture<MyComp7771Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7771Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7771Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
