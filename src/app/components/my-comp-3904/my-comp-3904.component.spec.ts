import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3904Component } from './my-comp-3904.component';

describe('MyComp3904Component', () => {
  let component: MyComp3904Component;
  let fixture: ComponentFixture<MyComp3904Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3904Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3904Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
