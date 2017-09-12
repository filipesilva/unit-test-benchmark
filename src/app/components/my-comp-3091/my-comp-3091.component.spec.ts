import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3091Component } from './my-comp-3091.component';

describe('MyComp3091Component', () => {
  let component: MyComp3091Component;
  let fixture: ComponentFixture<MyComp3091Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3091Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3091Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
