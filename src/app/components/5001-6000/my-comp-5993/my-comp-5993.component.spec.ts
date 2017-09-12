import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5993Component } from './my-comp-5993.component';

describe('MyComp5993Component', () => {
  let component: MyComp5993Component;
  let fixture: ComponentFixture<MyComp5993Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5993Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5993Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
