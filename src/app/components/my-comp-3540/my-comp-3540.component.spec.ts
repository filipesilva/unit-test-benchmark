import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3540Component } from './my-comp-3540.component';

describe('MyComp3540Component', () => {
  let component: MyComp3540Component;
  let fixture: ComponentFixture<MyComp3540Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3540Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3540Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
