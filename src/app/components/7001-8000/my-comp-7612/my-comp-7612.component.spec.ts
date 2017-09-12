import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7612Component } from './my-comp-7612.component';

describe('MyComp7612Component', () => {
  let component: MyComp7612Component;
  let fixture: ComponentFixture<MyComp7612Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7612Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7612Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
