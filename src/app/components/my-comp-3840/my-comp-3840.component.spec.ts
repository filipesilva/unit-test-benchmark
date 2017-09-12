import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3840Component } from './my-comp-3840.component';

describe('MyComp3840Component', () => {
  let component: MyComp3840Component;
  let fixture: ComponentFixture<MyComp3840Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3840Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3840Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
