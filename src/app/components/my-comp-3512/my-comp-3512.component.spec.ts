import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3512Component } from './my-comp-3512.component';

describe('MyComp3512Component', () => {
  let component: MyComp3512Component;
  let fixture: ComponentFixture<MyComp3512Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3512Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3512Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
