import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3444Component } from './my-comp-3444.component';

describe('MyComp3444Component', () => {
  let component: MyComp3444Component;
  let fixture: ComponentFixture<MyComp3444Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3444Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3444Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
