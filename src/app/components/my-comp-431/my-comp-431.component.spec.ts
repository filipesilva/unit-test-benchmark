import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp431Component } from './my-comp-431.component';

describe('MyComp431Component', () => {
  let component: MyComp431Component;
  let fixture: ComponentFixture<MyComp431Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp431Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp431Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
