import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3028Component } from './my-comp-3028.component';

describe('MyComp3028Component', () => {
  let component: MyComp3028Component;
  let fixture: ComponentFixture<MyComp3028Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3028Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3028Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
