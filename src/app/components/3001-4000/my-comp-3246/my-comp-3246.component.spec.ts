import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3246Component } from './my-comp-3246.component';

describe('MyComp3246Component', () => {
  let component: MyComp3246Component;
  let fixture: ComponentFixture<MyComp3246Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3246Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3246Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
