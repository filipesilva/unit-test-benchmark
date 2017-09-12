import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7147Component } from './my-comp-7147.component';

describe('MyComp7147Component', () => {
  let component: MyComp7147Component;
  let fixture: ComponentFixture<MyComp7147Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7147Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7147Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
