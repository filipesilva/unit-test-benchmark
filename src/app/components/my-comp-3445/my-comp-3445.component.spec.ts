import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3445Component } from './my-comp-3445.component';

describe('MyComp3445Component', () => {
  let component: MyComp3445Component;
  let fixture: ComponentFixture<MyComp3445Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3445Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3445Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
