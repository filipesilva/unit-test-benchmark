import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5126Component } from './my-comp-5126.component';

describe('MyComp5126Component', () => {
  let component: MyComp5126Component;
  let fixture: ComponentFixture<MyComp5126Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5126Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5126Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
