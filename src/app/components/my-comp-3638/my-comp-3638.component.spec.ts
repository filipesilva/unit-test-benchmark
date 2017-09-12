import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3638Component } from './my-comp-3638.component';

describe('MyComp3638Component', () => {
  let component: MyComp3638Component;
  let fixture: ComponentFixture<MyComp3638Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3638Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3638Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
