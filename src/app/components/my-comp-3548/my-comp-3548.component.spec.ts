import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3548Component } from './my-comp-3548.component';

describe('MyComp3548Component', () => {
  let component: MyComp3548Component;
  let fixture: ComponentFixture<MyComp3548Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3548Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3548Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
