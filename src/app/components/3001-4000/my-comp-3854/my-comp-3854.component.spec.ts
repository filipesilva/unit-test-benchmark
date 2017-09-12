import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3854Component } from './my-comp-3854.component';

describe('MyComp3854Component', () => {
  let component: MyComp3854Component;
  let fixture: ComponentFixture<MyComp3854Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3854Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3854Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
