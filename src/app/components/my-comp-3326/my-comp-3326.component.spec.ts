import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3326Component } from './my-comp-3326.component';

describe('MyComp3326Component', () => {
  let component: MyComp3326Component;
  let fixture: ComponentFixture<MyComp3326Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3326Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3326Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
