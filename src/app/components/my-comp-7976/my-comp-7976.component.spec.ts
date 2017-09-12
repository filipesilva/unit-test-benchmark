import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7976Component } from './my-comp-7976.component';

describe('MyComp7976Component', () => {
  let component: MyComp7976Component;
  let fixture: ComponentFixture<MyComp7976Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7976Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7976Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
