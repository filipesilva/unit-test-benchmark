import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3280Component } from './my-comp-3280.component';

describe('MyComp3280Component', () => {
  let component: MyComp3280Component;
  let fixture: ComponentFixture<MyComp3280Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3280Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3280Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
