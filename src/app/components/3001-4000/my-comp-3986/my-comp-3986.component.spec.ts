import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3986Component } from './my-comp-3986.component';

describe('MyComp3986Component', () => {
  let component: MyComp3986Component;
  let fixture: ComponentFixture<MyComp3986Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3986Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3986Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
