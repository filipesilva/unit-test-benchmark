import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7250Component } from './my-comp-7250.component';

describe('MyComp7250Component', () => {
  let component: MyComp7250Component;
  let fixture: ComponentFixture<MyComp7250Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7250Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7250Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
