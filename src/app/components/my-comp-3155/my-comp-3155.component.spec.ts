import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3155Component } from './my-comp-3155.component';

describe('MyComp3155Component', () => {
  let component: MyComp3155Component;
  let fixture: ComponentFixture<MyComp3155Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3155Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3155Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
