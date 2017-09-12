import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3291Component } from './my-comp-3291.component';

describe('MyComp3291Component', () => {
  let component: MyComp3291Component;
  let fixture: ComponentFixture<MyComp3291Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3291Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3291Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
