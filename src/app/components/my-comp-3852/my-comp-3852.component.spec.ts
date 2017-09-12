import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3852Component } from './my-comp-3852.component';

describe('MyComp3852Component', () => {
  let component: MyComp3852Component;
  let fixture: ComponentFixture<MyComp3852Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3852Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3852Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
