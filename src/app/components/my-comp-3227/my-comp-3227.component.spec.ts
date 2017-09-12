import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3227Component } from './my-comp-3227.component';

describe('MyComp3227Component', () => {
  let component: MyComp3227Component;
  let fixture: ComponentFixture<MyComp3227Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3227Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3227Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
