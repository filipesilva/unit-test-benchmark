import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3618Component } from './my-comp-3618.component';

describe('MyComp3618Component', () => {
  let component: MyComp3618Component;
  let fixture: ComponentFixture<MyComp3618Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3618Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3618Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
