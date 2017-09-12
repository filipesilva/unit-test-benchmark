import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3125Component } from './my-comp-3125.component';

describe('MyComp3125Component', () => {
  let component: MyComp3125Component;
  let fixture: ComponentFixture<MyComp3125Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3125Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3125Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
