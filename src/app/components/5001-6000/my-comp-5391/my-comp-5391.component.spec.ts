import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5391Component } from './my-comp-5391.component';

describe('MyComp5391Component', () => {
  let component: MyComp5391Component;
  let fixture: ComponentFixture<MyComp5391Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5391Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5391Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
