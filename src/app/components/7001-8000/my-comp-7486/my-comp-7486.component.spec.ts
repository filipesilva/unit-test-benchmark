import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7486Component } from './my-comp-7486.component';

describe('MyComp7486Component', () => {
  let component: MyComp7486Component;
  let fixture: ComponentFixture<MyComp7486Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7486Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7486Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
