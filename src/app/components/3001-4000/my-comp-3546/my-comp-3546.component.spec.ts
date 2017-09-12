import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3546Component } from './my-comp-3546.component';

describe('MyComp3546Component', () => {
  let component: MyComp3546Component;
  let fixture: ComponentFixture<MyComp3546Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3546Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3546Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
