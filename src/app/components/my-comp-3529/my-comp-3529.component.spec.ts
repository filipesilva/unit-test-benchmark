import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3529Component } from './my-comp-3529.component';

describe('MyComp3529Component', () => {
  let component: MyComp3529Component;
  let fixture: ComponentFixture<MyComp3529Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3529Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3529Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
