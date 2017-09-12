import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3092Component } from './my-comp-3092.component';

describe('MyComp3092Component', () => {
  let component: MyComp3092Component;
  let fixture: ComponentFixture<MyComp3092Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3092Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3092Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
