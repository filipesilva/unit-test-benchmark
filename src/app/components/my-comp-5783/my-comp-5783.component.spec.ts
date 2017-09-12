import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5783Component } from './my-comp-5783.component';

describe('MyComp5783Component', () => {
  let component: MyComp5783Component;
  let fixture: ComponentFixture<MyComp5783Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5783Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5783Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
