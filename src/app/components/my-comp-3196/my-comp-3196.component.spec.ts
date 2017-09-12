import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3196Component } from './my-comp-3196.component';

describe('MyComp3196Component', () => {
  let component: MyComp3196Component;
  let fixture: ComponentFixture<MyComp3196Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3196Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3196Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
