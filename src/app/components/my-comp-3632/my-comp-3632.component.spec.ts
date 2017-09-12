import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3632Component } from './my-comp-3632.component';

describe('MyComp3632Component', () => {
  let component: MyComp3632Component;
  let fixture: ComponentFixture<MyComp3632Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3632Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3632Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
