import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3684Component } from './my-comp-3684.component';

describe('MyComp3684Component', () => {
  let component: MyComp3684Component;
  let fixture: ComponentFixture<MyComp3684Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3684Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3684Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
