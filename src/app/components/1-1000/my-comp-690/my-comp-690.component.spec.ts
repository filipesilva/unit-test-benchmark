import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp690Component } from './my-comp-690.component';

describe('MyComp690Component', () => {
  let component: MyComp690Component;
  let fixture: ComponentFixture<MyComp690Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp690Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp690Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
