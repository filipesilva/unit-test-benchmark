import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3078Component } from './my-comp-3078.component';

describe('MyComp3078Component', () => {
  let component: MyComp3078Component;
  let fixture: ComponentFixture<MyComp3078Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3078Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3078Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
