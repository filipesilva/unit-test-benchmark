import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3013Component } from './my-comp-3013.component';

describe('MyComp3013Component', () => {
  let component: MyComp3013Component;
  let fixture: ComponentFixture<MyComp3013Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3013Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3013Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
