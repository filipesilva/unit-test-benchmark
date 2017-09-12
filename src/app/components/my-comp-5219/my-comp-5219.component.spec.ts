import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5219Component } from './my-comp-5219.component';

describe('MyComp5219Component', () => {
  let component: MyComp5219Component;
  let fixture: ComponentFixture<MyComp5219Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5219Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5219Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
