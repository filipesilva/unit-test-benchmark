import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5293Component } from './my-comp-5293.component';

describe('MyComp5293Component', () => {
  let component: MyComp5293Component;
  let fixture: ComponentFixture<MyComp5293Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5293Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5293Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
