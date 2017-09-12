import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3222Component } from './my-comp-3222.component';

describe('MyComp3222Component', () => {
  let component: MyComp3222Component;
  let fixture: ComponentFixture<MyComp3222Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3222Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3222Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
