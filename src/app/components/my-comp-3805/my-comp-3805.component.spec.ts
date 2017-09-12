import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3805Component } from './my-comp-3805.component';

describe('MyComp3805Component', () => {
  let component: MyComp3805Component;
  let fixture: ComponentFixture<MyComp3805Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3805Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3805Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
