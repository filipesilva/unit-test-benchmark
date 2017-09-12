import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3130Component } from './my-comp-3130.component';

describe('MyComp3130Component', () => {
  let component: MyComp3130Component;
  let fixture: ComponentFixture<MyComp3130Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3130Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3130Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
