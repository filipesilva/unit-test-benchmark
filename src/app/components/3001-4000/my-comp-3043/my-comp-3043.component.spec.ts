import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3043Component } from './my-comp-3043.component';

describe('MyComp3043Component', () => {
  let component: MyComp3043Component;
  let fixture: ComponentFixture<MyComp3043Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3043Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3043Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
