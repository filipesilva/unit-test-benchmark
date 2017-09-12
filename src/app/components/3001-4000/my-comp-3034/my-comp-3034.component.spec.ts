import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3034Component } from './my-comp-3034.component';

describe('MyComp3034Component', () => {
  let component: MyComp3034Component;
  let fixture: ComponentFixture<MyComp3034Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3034Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3034Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
