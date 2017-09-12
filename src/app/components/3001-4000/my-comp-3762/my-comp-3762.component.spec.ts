import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3762Component } from './my-comp-3762.component';

describe('MyComp3762Component', () => {
  let component: MyComp3762Component;
  let fixture: ComponentFixture<MyComp3762Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3762Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3762Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
