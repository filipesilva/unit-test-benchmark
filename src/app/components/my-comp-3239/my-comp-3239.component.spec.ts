import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3239Component } from './my-comp-3239.component';

describe('MyComp3239Component', () => {
  let component: MyComp3239Component;
  let fixture: ComponentFixture<MyComp3239Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3239Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3239Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
