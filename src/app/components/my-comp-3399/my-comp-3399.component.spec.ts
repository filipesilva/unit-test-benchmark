import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3399Component } from './my-comp-3399.component';

describe('MyComp3399Component', () => {
  let component: MyComp3399Component;
  let fixture: ComponentFixture<MyComp3399Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3399Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3399Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
