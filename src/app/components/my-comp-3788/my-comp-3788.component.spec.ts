import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3788Component } from './my-comp-3788.component';

describe('MyComp3788Component', () => {
  let component: MyComp3788Component;
  let fixture: ComponentFixture<MyComp3788Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3788Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3788Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
