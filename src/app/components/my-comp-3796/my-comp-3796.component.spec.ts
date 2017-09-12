import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3796Component } from './my-comp-3796.component';

describe('MyComp3796Component', () => {
  let component: MyComp3796Component;
  let fixture: ComponentFixture<MyComp3796Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3796Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3796Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
