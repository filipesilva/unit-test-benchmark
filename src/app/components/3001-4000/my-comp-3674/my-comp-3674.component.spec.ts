import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3674Component } from './my-comp-3674.component';

describe('MyComp3674Component', () => {
  let component: MyComp3674Component;
  let fixture: ComponentFixture<MyComp3674Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3674Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3674Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
