import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3254Component } from './my-comp-3254.component';

describe('MyComp3254Component', () => {
  let component: MyComp3254Component;
  let fixture: ComponentFixture<MyComp3254Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3254Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3254Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
