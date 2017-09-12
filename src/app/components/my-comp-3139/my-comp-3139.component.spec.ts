import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3139Component } from './my-comp-3139.component';

describe('MyComp3139Component', () => {
  let component: MyComp3139Component;
  let fixture: ComponentFixture<MyComp3139Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3139Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3139Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
