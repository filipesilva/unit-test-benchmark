import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3408Component } from './my-comp-3408.component';

describe('MyComp3408Component', () => {
  let component: MyComp3408Component;
  let fixture: ComponentFixture<MyComp3408Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3408Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3408Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
