import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5477Component } from './my-comp-5477.component';

describe('MyComp5477Component', () => {
  let component: MyComp5477Component;
  let fixture: ComponentFixture<MyComp5477Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5477Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5477Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
