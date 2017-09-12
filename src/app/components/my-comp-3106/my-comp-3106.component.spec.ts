import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3106Component } from './my-comp-3106.component';

describe('MyComp3106Component', () => {
  let component: MyComp3106Component;
  let fixture: ComponentFixture<MyComp3106Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3106Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3106Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
