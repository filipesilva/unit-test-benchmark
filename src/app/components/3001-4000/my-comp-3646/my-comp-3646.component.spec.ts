import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3646Component } from './my-comp-3646.component';

describe('MyComp3646Component', () => {
  let component: MyComp3646Component;
  let fixture: ComponentFixture<MyComp3646Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3646Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3646Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
