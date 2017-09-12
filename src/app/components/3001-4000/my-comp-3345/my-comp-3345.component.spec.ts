import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3345Component } from './my-comp-3345.component';

describe('MyComp3345Component', () => {
  let component: MyComp3345Component;
  let fixture: ComponentFixture<MyComp3345Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3345Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3345Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
