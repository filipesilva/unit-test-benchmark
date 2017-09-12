import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3009Component } from './my-comp-3009.component';

describe('MyComp3009Component', () => {
  let component: MyComp3009Component;
  let fixture: ComponentFixture<MyComp3009Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3009Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3009Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
