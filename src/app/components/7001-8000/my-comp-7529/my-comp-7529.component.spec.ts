import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7529Component } from './my-comp-7529.component';

describe('MyComp7529Component', () => {
  let component: MyComp7529Component;
  let fixture: ComponentFixture<MyComp7529Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7529Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7529Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
