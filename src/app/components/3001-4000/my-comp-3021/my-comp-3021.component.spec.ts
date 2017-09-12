import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3021Component } from './my-comp-3021.component';

describe('MyComp3021Component', () => {
  let component: MyComp3021Component;
  let fixture: ComponentFixture<MyComp3021Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3021Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
