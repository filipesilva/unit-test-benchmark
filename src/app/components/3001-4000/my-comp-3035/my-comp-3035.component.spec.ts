import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3035Component } from './my-comp-3035.component';

describe('MyComp3035Component', () => {
  let component: MyComp3035Component;
  let fixture: ComponentFixture<MyComp3035Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3035Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3035Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
