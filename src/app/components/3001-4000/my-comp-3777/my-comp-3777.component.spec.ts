import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3777Component } from './my-comp-3777.component';

describe('MyComp3777Component', () => {
  let component: MyComp3777Component;
  let fixture: ComponentFixture<MyComp3777Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3777Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3777Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
