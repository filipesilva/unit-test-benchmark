import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5573Component } from './my-comp-5573.component';

describe('MyComp5573Component', () => {
  let component: MyComp5573Component;
  let fixture: ComponentFixture<MyComp5573Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5573Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5573Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
