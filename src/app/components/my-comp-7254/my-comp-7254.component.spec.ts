import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7254Component } from './my-comp-7254.component';

describe('MyComp7254Component', () => {
  let component: MyComp7254Component;
  let fixture: ComponentFixture<MyComp7254Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7254Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7254Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
