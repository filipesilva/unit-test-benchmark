import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3760Component } from './my-comp-3760.component';

describe('MyComp3760Component', () => {
  let component: MyComp3760Component;
  let fixture: ComponentFixture<MyComp3760Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3760Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3760Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
