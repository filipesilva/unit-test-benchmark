import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3603Component } from './my-comp-3603.component';

describe('MyComp3603Component', () => {
  let component: MyComp3603Component;
  let fixture: ComponentFixture<MyComp3603Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3603Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3603Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
