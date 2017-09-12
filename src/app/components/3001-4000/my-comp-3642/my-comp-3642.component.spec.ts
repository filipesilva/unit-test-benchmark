import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3642Component } from './my-comp-3642.component';

describe('MyComp3642Component', () => {
  let component: MyComp3642Component;
  let fixture: ComponentFixture<MyComp3642Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3642Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3642Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
