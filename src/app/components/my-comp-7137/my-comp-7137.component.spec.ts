import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7137Component } from './my-comp-7137.component';

describe('MyComp7137Component', () => {
  let component: MyComp7137Component;
  let fixture: ComponentFixture<MyComp7137Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7137Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7137Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
