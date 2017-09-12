import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3585Component } from './my-comp-3585.component';

describe('MyComp3585Component', () => {
  let component: MyComp3585Component;
  let fixture: ComponentFixture<MyComp3585Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3585Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3585Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
