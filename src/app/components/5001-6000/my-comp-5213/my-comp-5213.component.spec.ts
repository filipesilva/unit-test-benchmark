import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5213Component } from './my-comp-5213.component';

describe('MyComp5213Component', () => {
  let component: MyComp5213Component;
  let fixture: ComponentFixture<MyComp5213Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5213Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5213Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
