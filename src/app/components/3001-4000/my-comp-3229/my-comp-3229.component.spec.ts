import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3229Component } from './my-comp-3229.component';

describe('MyComp3229Component', () => {
  let component: MyComp3229Component;
  let fixture: ComponentFixture<MyComp3229Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3229Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3229Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
