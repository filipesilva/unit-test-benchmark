import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3055Component } from './my-comp-3055.component';

describe('MyComp3055Component', () => {
  let component: MyComp3055Component;
  let fixture: ComponentFixture<MyComp3055Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3055Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3055Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
