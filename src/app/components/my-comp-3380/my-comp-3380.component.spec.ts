import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3380Component } from './my-comp-3380.component';

describe('MyComp3380Component', () => {
  let component: MyComp3380Component;
  let fixture: ComponentFixture<MyComp3380Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3380Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3380Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
