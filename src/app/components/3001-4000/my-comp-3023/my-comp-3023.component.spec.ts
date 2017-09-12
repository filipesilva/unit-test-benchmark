import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3023Component } from './my-comp-3023.component';

describe('MyComp3023Component', () => {
  let component: MyComp3023Component;
  let fixture: ComponentFixture<MyComp3023Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3023Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
