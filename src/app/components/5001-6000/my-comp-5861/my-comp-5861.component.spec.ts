import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5861Component } from './my-comp-5861.component';

describe('MyComp5861Component', () => {
  let component: MyComp5861Component;
  let fixture: ComponentFixture<MyComp5861Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5861Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5861Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
