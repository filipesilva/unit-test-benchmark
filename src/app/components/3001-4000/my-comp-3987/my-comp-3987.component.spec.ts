import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3987Component } from './my-comp-3987.component';

describe('MyComp3987Component', () => {
  let component: MyComp3987Component;
  let fixture: ComponentFixture<MyComp3987Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3987Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3987Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
