import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3532Component } from './my-comp-3532.component';

describe('MyComp3532Component', () => {
  let component: MyComp3532Component;
  let fixture: ComponentFixture<MyComp3532Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3532Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3532Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
