import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2801Component } from './my-comp-2801.component';

describe('MyComp2801Component', () => {
  let component: MyComp2801Component;
  let fixture: ComponentFixture<MyComp2801Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2801Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2801Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
