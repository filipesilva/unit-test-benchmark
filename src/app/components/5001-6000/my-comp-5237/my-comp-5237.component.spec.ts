import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5237Component } from './my-comp-5237.component';

describe('MyComp5237Component', () => {
  let component: MyComp5237Component;
  let fixture: ComponentFixture<MyComp5237Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5237Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5237Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
