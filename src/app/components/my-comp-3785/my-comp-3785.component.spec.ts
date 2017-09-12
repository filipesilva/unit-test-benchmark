import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3785Component } from './my-comp-3785.component';

describe('MyComp3785Component', () => {
  let component: MyComp3785Component;
  let fixture: ComponentFixture<MyComp3785Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3785Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3785Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
