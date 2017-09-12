import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3612Component } from './my-comp-3612.component';

describe('MyComp3612Component', () => {
  let component: MyComp3612Component;
  let fixture: ComponentFixture<MyComp3612Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3612Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3612Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
