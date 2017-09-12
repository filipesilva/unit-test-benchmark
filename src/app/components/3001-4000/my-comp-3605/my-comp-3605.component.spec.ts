import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3605Component } from './my-comp-3605.component';

describe('MyComp3605Component', () => {
  let component: MyComp3605Component;
  let fixture: ComponentFixture<MyComp3605Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3605Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3605Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
