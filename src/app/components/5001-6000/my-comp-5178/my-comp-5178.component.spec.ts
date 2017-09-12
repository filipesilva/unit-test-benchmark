import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5178Component } from './my-comp-5178.component';

describe('MyComp5178Component', () => {
  let component: MyComp5178Component;
  let fixture: ComponentFixture<MyComp5178Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5178Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5178Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
