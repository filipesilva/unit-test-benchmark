import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3481Component } from './my-comp-3481.component';

describe('MyComp3481Component', () => {
  let component: MyComp3481Component;
  let fixture: ComponentFixture<MyComp3481Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3481Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3481Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
