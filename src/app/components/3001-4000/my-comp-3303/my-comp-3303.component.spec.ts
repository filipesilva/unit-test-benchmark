import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3303Component } from './my-comp-3303.component';

describe('MyComp3303Component', () => {
  let component: MyComp3303Component;
  let fixture: ComponentFixture<MyComp3303Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3303Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3303Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
