import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3396Component } from './my-comp-3396.component';

describe('MyComp3396Component', () => {
  let component: MyComp3396Component;
  let fixture: ComponentFixture<MyComp3396Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3396Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3396Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
