import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5853Component } from './my-comp-5853.component';

describe('MyComp5853Component', () => {
  let component: MyComp5853Component;
  let fixture: ComponentFixture<MyComp5853Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5853Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5853Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
