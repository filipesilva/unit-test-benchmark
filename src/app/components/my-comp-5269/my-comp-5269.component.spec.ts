import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5269Component } from './my-comp-5269.component';

describe('MyComp5269Component', () => {
  let component: MyComp5269Component;
  let fixture: ComponentFixture<MyComp5269Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5269Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5269Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
