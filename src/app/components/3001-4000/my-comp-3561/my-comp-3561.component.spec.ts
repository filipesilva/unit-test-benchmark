import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3561Component } from './my-comp-3561.component';

describe('MyComp3561Component', () => {
  let component: MyComp3561Component;
  let fixture: ComponentFixture<MyComp3561Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3561Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3561Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
