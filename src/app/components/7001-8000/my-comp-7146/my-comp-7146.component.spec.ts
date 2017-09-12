import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7146Component } from './my-comp-7146.component';

describe('MyComp7146Component', () => {
  let component: MyComp7146Component;
  let fixture: ComponentFixture<MyComp7146Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7146Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7146Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
