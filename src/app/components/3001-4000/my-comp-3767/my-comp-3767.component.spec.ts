import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3767Component } from './my-comp-3767.component';

describe('MyComp3767Component', () => {
  let component: MyComp3767Component;
  let fixture: ComponentFixture<MyComp3767Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3767Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3767Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
