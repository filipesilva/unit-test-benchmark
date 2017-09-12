import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3879Component } from './my-comp-3879.component';

describe('MyComp3879Component', () => {
  let component: MyComp3879Component;
  let fixture: ComponentFixture<MyComp3879Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3879Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3879Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
