import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5188Component } from './my-comp-5188.component';

describe('MyComp5188Component', () => {
  let component: MyComp5188Component;
  let fixture: ComponentFixture<MyComp5188Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5188Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5188Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
