import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7122Component } from './my-comp-7122.component';

describe('MyComp7122Component', () => {
  let component: MyComp7122Component;
  let fixture: ComponentFixture<MyComp7122Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7122Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7122Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
