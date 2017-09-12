import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3844Component } from './my-comp-3844.component';

describe('MyComp3844Component', () => {
  let component: MyComp3844Component;
  let fixture: ComponentFixture<MyComp3844Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3844Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3844Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
