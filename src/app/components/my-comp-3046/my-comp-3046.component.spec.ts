import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3046Component } from './my-comp-3046.component';

describe('MyComp3046Component', () => {
  let component: MyComp3046Component;
  let fixture: ComponentFixture<MyComp3046Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3046Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3046Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
