import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3059Component } from './my-comp-3059.component';

describe('MyComp3059Component', () => {
  let component: MyComp3059Component;
  let fixture: ComponentFixture<MyComp3059Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3059Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3059Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
