import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3698Component } from './my-comp-3698.component';

describe('MyComp3698Component', () => {
  let component: MyComp3698Component;
  let fixture: ComponentFixture<MyComp3698Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3698Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3698Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
