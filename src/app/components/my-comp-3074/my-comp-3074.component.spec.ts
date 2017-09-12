import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3074Component } from './my-comp-3074.component';

describe('MyComp3074Component', () => {
  let component: MyComp3074Component;
  let fixture: ComponentFixture<MyComp3074Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3074Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3074Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
