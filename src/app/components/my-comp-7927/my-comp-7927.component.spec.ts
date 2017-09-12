import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7927Component } from './my-comp-7927.component';

describe('MyComp7927Component', () => {
  let component: MyComp7927Component;
  let fixture: ComponentFixture<MyComp7927Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7927Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7927Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
