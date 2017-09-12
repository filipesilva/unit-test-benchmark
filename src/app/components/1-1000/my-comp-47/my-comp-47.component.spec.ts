import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp47Component } from './my-comp-47.component';

describe('MyComp47Component', () => {
  let component: MyComp47Component;
  let fixture: ComponentFixture<MyComp47Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp47Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
