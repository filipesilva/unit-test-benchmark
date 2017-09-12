import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5223Component } from './my-comp-5223.component';

describe('MyComp5223Component', () => {
  let component: MyComp5223Component;
  let fixture: ComponentFixture<MyComp5223Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5223Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5223Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
