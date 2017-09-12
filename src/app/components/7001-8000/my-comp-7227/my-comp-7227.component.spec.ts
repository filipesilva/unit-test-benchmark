import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7227Component } from './my-comp-7227.component';

describe('MyComp7227Component', () => {
  let component: MyComp7227Component;
  let fixture: ComponentFixture<MyComp7227Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7227Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7227Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
