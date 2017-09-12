import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3714Component } from './my-comp-3714.component';

describe('MyComp3714Component', () => {
  let component: MyComp3714Component;
  let fixture: ComponentFixture<MyComp3714Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3714Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3714Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
