import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3339Component } from './my-comp-3339.component';

describe('MyComp3339Component', () => {
  let component: MyComp3339Component;
  let fixture: ComponentFixture<MyComp3339Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3339Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3339Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
