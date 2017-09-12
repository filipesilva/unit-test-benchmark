import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3393Component } from './my-comp-3393.component';

describe('MyComp3393Component', () => {
  let component: MyComp3393Component;
  let fixture: ComponentFixture<MyComp3393Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3393Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3393Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
