import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3221Component } from './my-comp-3221.component';

describe('MyComp3221Component', () => {
  let component: MyComp3221Component;
  let fixture: ComponentFixture<MyComp3221Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3221Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3221Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
