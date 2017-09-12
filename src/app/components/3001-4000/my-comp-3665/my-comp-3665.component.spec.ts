import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3665Component } from './my-comp-3665.component';

describe('MyComp3665Component', () => {
  let component: MyComp3665Component;
  let fixture: ComponentFixture<MyComp3665Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3665Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3665Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
