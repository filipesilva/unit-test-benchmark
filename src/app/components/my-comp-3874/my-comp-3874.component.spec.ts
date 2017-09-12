import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3874Component } from './my-comp-3874.component';

describe('MyComp3874Component', () => {
  let component: MyComp3874Component;
  let fixture: ComponentFixture<MyComp3874Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3874Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3874Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
