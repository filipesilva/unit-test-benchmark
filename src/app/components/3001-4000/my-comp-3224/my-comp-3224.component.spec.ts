import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3224Component } from './my-comp-3224.component';

describe('MyComp3224Component', () => {
  let component: MyComp3224Component;
  let fixture: ComponentFixture<MyComp3224Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3224Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3224Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
