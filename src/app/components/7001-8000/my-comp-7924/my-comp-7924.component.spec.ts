import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7924Component } from './my-comp-7924.component';

describe('MyComp7924Component', () => {
  let component: MyComp7924Component;
  let fixture: ComponentFixture<MyComp7924Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7924Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7924Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
