import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3927Component } from './my-comp-3927.component';

describe('MyComp3927Component', () => {
  let component: MyComp3927Component;
  let fixture: ComponentFixture<MyComp3927Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3927Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3927Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
