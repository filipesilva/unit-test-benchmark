import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3252Component } from './my-comp-3252.component';

describe('MyComp3252Component', () => {
  let component: MyComp3252Component;
  let fixture: ComponentFixture<MyComp3252Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3252Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3252Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
