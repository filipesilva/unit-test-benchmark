import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3770Component } from './my-comp-3770.component';

describe('MyComp3770Component', () => {
  let component: MyComp3770Component;
  let fixture: ComponentFixture<MyComp3770Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3770Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3770Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
