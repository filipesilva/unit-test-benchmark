import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3421Component } from './my-comp-3421.component';

describe('MyComp3421Component', () => {
  let component: MyComp3421Component;
  let fixture: ComponentFixture<MyComp3421Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3421Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3421Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
