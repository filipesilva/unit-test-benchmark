import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3442Component } from './my-comp-3442.component';

describe('MyComp3442Component', () => {
  let component: MyComp3442Component;
  let fixture: ComponentFixture<MyComp3442Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3442Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3442Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
