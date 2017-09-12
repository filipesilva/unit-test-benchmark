import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3630Component } from './my-comp-3630.component';

describe('MyComp3630Component', () => {
  let component: MyComp3630Component;
  let fixture: ComponentFixture<MyComp3630Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3630Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3630Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
