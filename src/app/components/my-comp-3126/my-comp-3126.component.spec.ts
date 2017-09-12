import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3126Component } from './my-comp-3126.component';

describe('MyComp3126Component', () => {
  let component: MyComp3126Component;
  let fixture: ComponentFixture<MyComp3126Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3126Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3126Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
