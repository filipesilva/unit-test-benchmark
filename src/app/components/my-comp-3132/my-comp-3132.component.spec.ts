import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3132Component } from './my-comp-3132.component';

describe('MyComp3132Component', () => {
  let component: MyComp3132Component;
  let fixture: ComponentFixture<MyComp3132Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3132Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3132Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
