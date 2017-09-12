import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3595Component } from './my-comp-3595.component';

describe('MyComp3595Component', () => {
  let component: MyComp3595Component;
  let fixture: ComponentFixture<MyComp3595Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3595Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3595Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
