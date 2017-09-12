import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7921Component } from './my-comp-7921.component';

describe('MyComp7921Component', () => {
  let component: MyComp7921Component;
  let fixture: ComponentFixture<MyComp7921Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7921Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7921Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
