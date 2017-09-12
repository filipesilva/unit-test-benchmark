import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5227Component } from './my-comp-5227.component';

describe('MyComp5227Component', () => {
  let component: MyComp5227Component;
  let fixture: ComponentFixture<MyComp5227Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5227Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5227Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
